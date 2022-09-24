import React from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import {
  ScreenLayout,
  CatListItem,
  CatListItemHeight,
  ScreenLoader,
  ListLoader,
} from '~components';
import {useFetchCats} from '~hook';
import {getItemLayout} from '~utils';

export const AllCats = () => {
  const {isLoading, data, hasNextPage, fetchNextPage, isFetchingNextPage} = useFetchCats();

  const loadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };
  return (
    <ScreenLayout title="All Cats">
      <View style={styles.view}>
        {isLoading ? (
          <ScreenLoader />
        ) : (
          <FlatList
            data={data?.pages?.flat()}
            renderItem={CatListItem}
            showsVerticalScrollIndicator={false}
            getItemLayout={getItemLayout(CatListItemHeight)}
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
