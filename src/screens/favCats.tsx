import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {ScreenLayout, FaveCatCard, FaveCatCardHeight} from '~components';

const list = [
  {
    id: 100038507,
    image: {
      id: 'E8dL1Pqpz',
      url: 'https://cdn2.thecatapi.com/images/E8dL1Pqpz.jpg',
    },
  },
  {
    id: 1000385076,
    image: {
      id: 'E8dL1Pqpz',
      url: 'https://cdn2.thecatapi.com/images/E8dL1Pqpz.jpg',
    },
  },
  {
    id: 100038507456,
    image: {
      id: 'E8dL1Pqpz',
      url: 'https://cdn2.thecatapi.com/images/E8dL1Pqpz.jpg',
    },
  },
]

export const FavCats = () => {
  const numberOfColums = 2;
  const getItemLayout = (data: any, index: number) => {
    return {
      length: FaveCatCardHeight,
      offset: FaveCatCardHeight * Math.floor(index / numberOfColums),
      index,
    };
  };
  return (
    <ScreenLayout title="Cats I Like">
      <View style={styles.view}>
        <FlatList
          data={list}
          renderItem={FaveCatCard}
          showsVerticalScrollIndicator={false}
          numColumns={numberOfColums}
          getItemLayout={getItemLayout}
          columnWrapperStyle={styles.listSpacing}
          keyExtractor={(item: any) => item.id}
        />
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
