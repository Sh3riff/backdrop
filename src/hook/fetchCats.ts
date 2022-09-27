import {useInfiniteQuery} from 'react-query';
import axios from 'axios';
import Config from 'react-native-config';

export const useFetchCats = (pageLimit: number = 16) => {
  const axiosFetchCat = ({pageParam = 0}) =>
    axios
      .get(
        `https://api.thecatapi.com/v1/images/search?limit=${pageLimit}&page=${pageParam}&order=DESC&has_breeds=1`,
        {headers: {'x-api-key': Config.CAT_API_KEY}},
      )
      .then(response => response.data)
      .catch(err => err);
  const queryValues = useInfiniteQuery(['cats'], axiosFetchCat, {
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

  const flatPages: any = queryValues.data?.pages || [];
  return {
    ...queryValues,
    data: flatPages.flat(),
  };
};
