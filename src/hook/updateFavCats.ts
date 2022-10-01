import {useMutation, useQueryClient} from 'react-query';
import {getAxiosInstance} from '~utils';

export const useAddFavoriteCats = () => {
  const queryclient = useQueryClient();

  const axios = getAxiosInstance();

  const updateFavorite = (id: string) =>
    axios.post(`https://api.thecatapi.com/v1/favourites`, {image_id: id});
  return useMutation(updateFavorite, {
    onSuccess: () => queryclient.invalidateQueries(['favoriteCats']),
  });
};

export const useDeleteFavoriteCats = () => {
  const queryclient = useQueryClient();
  const axios = getAxiosInstance();
  const updateFavorite = (id: string) =>
    axios.delete(`https://api.thecatapi.com/v1/favourites/${id}`);
  return useMutation(updateFavorite, {
    onSuccess: () => queryclient.invalidateQueries(['favoriteCats']),
  });
};
