import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
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
  const {isLoading, data, hasNextPage, fetchNextPage, isFetchingNextPage} =
    useFetchCats();

  const loadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  // console.log(data[1])

  // This Component is essential to maintain a named
  // functional component in the flatlist and also
  // use hooks in the component
  const CatListItemEscapeHookError = ({item}: any) => (
    <CatListItem item={item} />
  );
  return (
    <ScreenLayout title="All Cats">
      <View style={styles.view}>
        {isLoading ? (
          <ScreenLoader />
        ) : (
          <FlatList
            data={data}
            renderItem={CatListItemEscapeHookError}
            showsVerticalScrollIndicator={false}
            getItemLayout={getItemLayout(CatListItemHeight)}
            keyExtractor={(item: any) => item.id}
            onEndReached={loadMore}
            onEndReachedThreshold={0.6}
            ListFooterComponent={isFetchingNextPage ? ListLoader : null}
            testID="AllCatsList"
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
