import axios from "axios";
import { Prefecture } from "@/types/Population";

//TODO RESAS用の共通HttpClientを作る, headerのKEYも含めて
const baseURL = `${process.env.NEXT_PUBLIC_RESAS_API_URL}${process.env.NEXT_PUBLIC_RESAS_API_DEFAULT_VER}`

export const fetchPrefectures = async (): Promise<Prefecture[]> => {
  return await axios.get(`${baseURL}/prefectures`, { headers: { "X-API-KEY": process.env.NEXT_PUBLIC_RESAS_API_KEY } })
    .then((response) => {
      return response.data.result
    })
    .catch((e) => {
      return Promise.reject(e);
    });
};

export const fetchPopulationByPrefecture = async (prefCode: number): Promise<any> => {
  return await axios.get(`${baseURL}/population/composition/perYear`, { headers: { "X-API-KEY": process.env.NEXT_PUBLIC_RESAS_API_KEY }, params: { prefCode } })
    .then((response) => {
      return response.data.result
    })
    .catch((e) => {
      return Promise.reject(e);
    });
};
