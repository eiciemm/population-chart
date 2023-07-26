import { useState, useEffect } from 'react';
import { usePrefectures } from '@/hooks/usePrefectures';
import { usePopulation } from '@/hooks/usePopulation';
import PopulationChart from '../presenters/PopulationChart';

const PopulationChartContainer = () => {
  const { prefectures, isLoading } = usePrefectures();
  const { fetchPopulation } = usePopulation();

  //型を整理して整える
  const [renderData, setRenderData] = useState<any>({});
  const [labels, setLabels] = useState<string[]>([]);

  useEffect(() => {
    const arr = [...Array(18)].map((_, i) => (i * 5 + 1960).toString());
    setLabels(arr);
  },[]);

  type KEY = "総人口" | "年少人口" | "生産年齢人口" | "老年人口";

  const getDataValue = (data: any, key: KEY) => {
    const targetData = data.find((d: any) => d.label === key);
    return targetData.data.map((v: any) => v.value);
  }

  //TODO 定数 47色もつ
  const COLORS = [
    "orange", "red", "brown", "coral", "pink", "purple", "cyan", "darkcyan", "blue"
  ]

  const handleSelectPrefecture = async (prefCode: number, prefName: string, checked: boolean) => {
    if (checked) {
      const data = await fetchPopulation(prefCode);
      const basicInfo = {
        label: prefName,
        borderColor: COLORS[Math.floor(Math.random() * 9)],
      }
      const newAllData = {
        data: getDataValue(data, "総人口"),
        ...basicInfo
      };
      const newYouthData = {
        data: getDataValue(data, "年少人口"),
        ...basicInfo
      };
      const newWorkerData = {
        data: getDataValue(data, "生産年齢人口"),
        ...basicInfo
      };
      const newElderlyData = {
        data: getDataValue(data, "老年人口"),
        ...basicInfo
      };
      if (Object.keys(renderData).length === 0) {
        setRenderData({
          all: [newAllData],
          youth: [newYouthData],
          worker: [newWorkerData],
          elderly: [newElderlyData],
        })
      } else {
        setRenderData({
          all: [...renderData["all"], newAllData],
          youth: [...renderData["youth"], newYouthData],
          worker: [...renderData["worker"], newWorkerData],
          elderly: [...renderData["elderly"], newElderlyData],
        })
      }
    } else {
      const newData: any = {};
      Object.keys(renderData).forEach(key => {
        newData[key] = renderData[key].filter((d: any) => d.label !== prefName)
      })
      setRenderData(newData);
    }
  }

  return (
    <PopulationChart
      isLoading={isLoading}
      prefectures={prefectures || []}
      labels={labels}
      renderData={renderData}
      handleSelectPrefecture={handleSelectPrefecture}
    />
  );
};

export default PopulationChartContainer;
