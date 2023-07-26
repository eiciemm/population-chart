import { Prefecture } from "@/types/Population";
import PrefecturesList from "./PrefecturesList";
import ChartGraph from "./ChartGraph";
import styles from "./PopulationChart.module.css";

type Props = {
  isLoading: boolean;
  prefectures: Prefecture[];
  labels: string[];
  renderData: any;
  handleSelectPrefecture: (prefCode: number, prefName: string, checked: boolean) => void;
};

const PopulationChart = ({
  isLoading,
  prefectures,
  labels,
  renderData,
  handleSelectPrefecture
}: Props) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Prefectures by P<span>●</span>pulation /jp</h2>
      <div className={styles.contentsWrapper}>
        <PrefecturesList
          isLoading={isLoading}
          prefectures={prefectures || []}
          handleSelectPrefecture={handleSelectPrefecture}
        />
        <ChartGraph labels={labels} renderData={renderData} />
      </div>
    </div>
  );
};

export default PopulationChart;
