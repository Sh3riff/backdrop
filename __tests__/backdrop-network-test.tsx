import React from 'react';
import {renderHook, act} from '@testing-library/react-hooks';
import {QueryClient, QueryClientProvider} from 'react-query';
import {
  useFetchCats,
  useFetchFavoriteCats,
  useAddFavoriteCats,
  useDeleteFavoriteCats,
} from '~hook';

const queryClient = new QueryClient();

const wrapper = ({children}: any) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
describe('Network test', () => {
  test('expect to fetch initial cat list (16 cats)', async () => {
    const {result, waitForNextUpdate} = renderHook(() => useFetchCats(), {
      wrapper,
    });

    await waitForNextUpdate();
    expect(result.current.data).toHaveLength(16);
  });

  test('expect to fetch more cat list (19 cats total)', async () => {
    const {result, waitForNextUpdate} = renderHook(() => useFetchCats(), {
      wrapper,
    });

    act(() => {
      result.current.fetchNextPage();
    });

    await waitForNextUpdate();

    expect(result.current.data).toHaveLength(19);
  });

  test('expect to fetch favorite cat list (2 favourite cates)', async () => {
    const {result, waitForNextUpdate} = renderHook(
      () => useFetchFavoriteCats(),
      {
        wrapper,
      },
    );

    await waitForNextUpdate();

    expect(result.current.data).toHaveLength(2);
  });

  test('expect to Add 1 Cat to favorite cat list & fetch the favorite cat list (3 favourite cats)', async () => {
    const {result: postResult} = renderHook(() => useAddFavoriteCats(), {
      wrapper,
    });

    await act(() => {
      postResult.current.mutate('0SxW2SQ_S');
    });

    const {result: fetchResult, waitForNextUpdate: fetchWaitForNextUpdate} =
      renderHook(() => useFetchFavoriteCats(), {
        wrapper,
      });

    await fetchWaitForNextUpdate();
    expect(fetchResult.current.data).toHaveLength(3);
  });

  test('expect to Delete 1 Cat from favorite cat list & fetch the favorite cat list (1 favourite cat remaining)', async () => {
    const {result: deleteResult} = renderHook(() => useDeleteFavoriteCats(), {
      wrapper,
    });

    await act(() => {
      deleteResult.current.mutate('rRLX_RH_o');
    });

    const {result: fetchResult, waitForNextUpdate: fetchWaitForNextUpdate} =
      renderHook(() => useFetchFavoriteCats(), {
        wrapper,
      });

    await fetchWaitForNextUpdate();
    expect(fetchResult.current.data).toHaveLength(3);
  });
});
