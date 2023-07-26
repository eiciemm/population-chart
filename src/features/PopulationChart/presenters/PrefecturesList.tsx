import { Prefecture } from "@/types/Population";
import CheckBox from "@/components/checkBox/CheckBox";
import styles from "./PrefecturesList.module.css";

type Props = {
  isLoading: boolean;
  prefectures: Prefecture[];
  handleSelectPrefecture: (prefCode: number, prefName: string, checked: boolean) => void;
};
  
const PrefecturesList = ({
  isLoading,
  prefectures,
  handleSelectPrefecture
}: Props) => {

  return (
    <div>
      {isLoading && <p>LOADING</p>}
      <div className={styles.checkBoxes}>
        {prefectures && prefectures.map((prefecture: Prefecture) =>
          <div key={prefecture.prefCode} className={styles.checkBox}>
            <CheckBox
              label={prefecture.prefName}
              handleOnChange={(checked: boolean) => handleSelectPrefecture(prefecture.prefCode, prefecture.prefName, checked)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PrefecturesList;
