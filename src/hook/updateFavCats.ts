import {useMutation, useQueryClient} from 'react-query';
import axios from 'axios';
import Config from 'react-native-config';

export const useAddFavoriteCats = () => {
  const queryclient = useQueryClient();

  const updateFavorite = (id: string) =>
    axios.post(
      `https://api.thecatapi.com/v1/favourites`,
      {image_id: id},
      {headers: {'x-api-key': Config.CAT_API_KEY}},
    );
  return useMutation(updateFavorite, {
    onSuccess: () => queryclient.invalidateQueries(['favoriteCats']),
  });
};
