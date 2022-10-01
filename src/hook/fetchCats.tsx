import {useInfiniteQuery} from 'react-query';
import {getAxiosInstance} from '~utils';

export const useFetchCats = (pageLimit: number = 16) => {
  const axios = getAxiosInstance();
  const axiosFetchCat = ({pageParam = 0}) =>
    axios
      .get(
        `https://api.thecatapi.com/v1/images/search?limit=${pageLimit}&page=${pageParam}&order=DESC&has_breeds=1`
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
