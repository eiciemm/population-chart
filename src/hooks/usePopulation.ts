import useSWR, { useSWRConfig } from "swr";
import useSWRMutation from 'swr/mutation'
import { useState } from 'react';
import { fetchPopulationByPrefecture } from '@/services/populationService';

//NEXT TODO triggerを使うことで手動で実行される
// export const usePopulation = () => {
//   const [data, setData] = useState<any>({});

//   const fetchPopulation = async (prefCode: number) => {
//     const result = await fetchPopulationByPrefecture(prefCode)
//     return result
//   };
//   return { fetchPopulation };
// }

export const usePopulation = () => {
  const [data, setData] = useState<any>([]);

  const fetchPopulation = ((prefCode: number) => {
    return fetchPopulationByPrefecture(prefCode)
      .then((result) => {
        return result.data;
      })
      .catch(() => {
        throw Error("fetch population failed");
      });
  });

  return { fetchPopulation };
};