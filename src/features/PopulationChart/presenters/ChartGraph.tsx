import { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import SelectBox from '@/components/selectBox/SelectBox';
import styles from "./ChartGraph.module.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type Props = {
  labels: string[];
  renderData: any;
};

type KEY = "all" | "youth" | "worker" | "elderly";
const DEFAULT_DATA = [
  {}
]

const ChartGraph = ({
  labels,
  renderData,
}: Props) => {
  const [type, setType] = useState<KEY>("all");

  const data = {
    labels: labels,
    datasets: Object.keys(renderData).length > 0 ? renderData[type] : DEFAULT_DATA
  };

  const handleOnChange = (value: KEY) => {
    setType(value);
  }

  // 空の状態をデータ生成
  // const isEmpty 

  return (
    <div>
      {/* <select name="example" onChange={handleOnChange}>
        <option value="all">総人口</option>
        <option value="youth">年少人口</option>
        <option value="worker">生産年齢人口</option>
        <option value="elderly">老年人口</option>
      </select> */}
      <SelectBox
        options={[
          { value: "all", label: "総人口" },
          { value: "youth", label: "年少人口" },
          { value: "worker", label: "生産年齢人口" },
          { value: "elderly", label: "老年人口" },
        ]}
        handleOnChange={handleOnChange}
      />
      {/* {Object.keys(renderData).length > 0 && */}
      <div className={styles.graphWrapper}>
        <Line data={data} />
      </div>
      {/* } */}
    </div>
  );
};

export default ChartGraph;
