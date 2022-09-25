import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {
  ScreenLayout,
  FaveCatCard,
  FaveCatCardHeight,
  ScreenLoader,
  EmptyScreen,
  ListLoader,
} from '~components';
import {useFetchFavoriteCats, useFetchCats} from '~hook';
import {getItemLayout} from '~utils';

export const FavCats = () => {
  const {isLoading, data, hasNextPage, fetchNextPage, isFetchingNextPage} =
    useFetchFavoriteCats();
  const {data: catData} = useFetchCats();

  const dataWithName = data?.map((data: any) => ({
    ...data,
    name:
      catData?.find((cat: any) => cat?.id === data.image_id)?.breeds?.[0]
        ?.name || 'Unknown Breed',
  }));

  const numberOfColums = 2;

  const loadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };
  if (isLoading) {
    return <ScreenLoader />;
  }

  // This Component is essential to maintain a named
  // functional component in the flatlist and also
  // use hooks in the component
  const FaveCatCardEscapeHookError = ({item}: any) => (
    <FaveCatCard item={item} />
  );
  return (
    <ScreenLayout title="Cats I Like">
      <View style={styles.view}>
        {!dataWithName || !dataWithName.length ? (
          <EmptyScreen />
        ) : (
          <FlatList
            data={dataWithName}
            renderItem={FaveCatCardEscapeHookError}
            showsVerticalScrollIndicator={false}
            numColumns={numberOfColums}
            getItemLayout={getItemLayout(FaveCatCardHeight, numberOfColums)}
            columnWrapperStyle={styles.listSpacing}
            keyExtractor={(item: any) => item.id}
            onEndReached={loadMore}
            onEndReachedThreshold={0.6}
            ListFooterComponent={isFetchingNextPage ? ListLoader : null}
          />
        )}
      </View>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  listSpacing: {justifyContent: 'space-between'},
  view: {
    flex: 1,
    padding: 24,
    backgroundColor: '#ffffff',
  },
  text: {
    fontFamily: 'SFProDisplay-Regular',
    fontSize: 36,
  },
});
