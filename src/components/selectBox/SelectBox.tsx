import React from "react";
import styles from "./SelectBox.module.css";

type KEY = "all" | "youth" | "worker" | "elderly";

type Props = {
  options: any[];
  formName?: string;
  disabled?: boolean;
  handleOnChange?: (value: KEY) => void;
};

const SelectBox = ({ options, formName, disabled, handleOnChange }: Props) => {
  const onChange = (e: any) => {
    if (!handleOnChange) return;
    handleOnChange(e.target.value);
  };

  const renderSelectBox = () => (
    <select onChange={onChange} disabled={disabled} className={styles.selectBox}>
      {options.map((option: any) =>
        <option key={option.value} value={option.value}>{option.label}</option>        
      )}
    </select>
  );

  return formName ? (
    <form name={formName}>
      {renderSelectBox()}
    </form>
  ) : (
    renderSelectBox()
  );
};

export default SelectBox;
