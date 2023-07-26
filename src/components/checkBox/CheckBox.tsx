import React from "react";
import styles from "./CheckBox.module.css";

type Props = {
  label: string;
  formName?: string;
  disabled?: boolean;
  handleOnChange?: (checked: boolean) => void;
};

const CheckBox = ({ label, formName, disabled, handleOnChange }: Props) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!handleOnChange) return;
    handleOnChange(e.target.checked)
  };

  const renderCheckBox = () => (
    <>
      <input type="checkbox" id={label} className={styles.checkBox} disabled={disabled} onChange={onChange} />
      <label className={styles.label} htmlFor={label}>{label}</label>
    </>
  );

  return formName ? (
    <form name={formName}>
      {renderCheckBox()}
    </form>
  ) : (
    renderCheckBox()
  );
};

export default CheckBox;
