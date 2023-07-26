import useSWR from 'swr';
import { fetchPrefectures } from '@/services/populationService';
import { Prefecture } from "@/types/Population";

export const usePrefectures = () => {
  const key = "/prefectures";

  const { data, error } = useSWR<Prefecture[], Error>(key, () =>
    fetchPrefectures()
  )

  return { prefectures: data, isLoading: !data && !error, error };
};
