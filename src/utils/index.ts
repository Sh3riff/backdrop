import axios from 'axios';
import Config from 'react-native-config';

export const getAxiosInstance = () => {
  if (Config?.CAT_API_KEY) {
    return axios.create({
      headers: {'x-api-key': Config.CAT_API_KEY},
    });
  }
  return axios;
};

export const getItemLayout = (
  itemHeight: number,
  numberOfColums: number = 1,
) => {
  return (data: any, index: number) => {
    return {
      length: itemHeight,
      offset: itemHeight * Math.floor(index / numberOfColums),
      index,
    };
  };
};
