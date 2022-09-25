import {useInfiniteQuery} from 'react-query';
import axios from 'axios';
import Config from 'react-native-config';

export const useFetchFavoriteCats = (pageLimit: number = 16) => {
  const axiosFetchCat = ({pageParam = 0}) =>
    axios
      .get(
        `https://api.thecatapi.com/v1/favourites?limit=${pageLimit}&page=${pageParam}&order=DESC`,
        {headers: {'x-api-key': Config.CAT_API_KEY}},
      )
      .then(response => response.data)
      .catch(err => err);
  const queryValues = useInfiniteQuery(['favoriteCats'], axiosFetchCat, {
    /**
     * pages is the number of request made
     * lastpage is the last request made
     */
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.length === pageLimit) {
        return pages.length;
      }
      return null;
    },
  });
  return {
    ...queryValues,
    data: queryValues.data?.pages?.flat()
  };
};
