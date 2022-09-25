import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {LoveIcon} from '~assets/svg';
import {useFetchCats, useAddFavoriteCats} from '~hook';

type ICatListItem = {
  item: {
    id: string;
    url: string;
    breeds?: {name: string}[];
  };
};

const ImageLength = 40;
const marginBottom = 20;

export const CatListItemHeight = ImageLength + marginBottom;

export const CatListItem = ({item}: ICatListItem) => {
  const {mutate} = useAddFavoriteCats();
  // FastImage.resizeMode.cover
  const {url, breeds, id} = item;
  const name = breeds?.length ? breeds[0].name : 'Unknown Breed';
  const isLiked = false;
  return (
    <TouchableOpacity style={styles.touch} onPress={() => mutate(id)}>
      <View style={styles.infoArea}>
        <FastImage
          style={styles.image}
          source={{uri: url}}
          resizeMode={FastImage.resizeMode.cover}
        />
        <Text style={styles.name}>{name}</Text>
      </View>
      <LoveIcon
        fill={isLiked ? '#DE0202' : '#ffffff'}
        stroke={isLiked ? '#DE0202' : '#212227'}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touch: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom,
  },
  infoArea: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: ImageLength,
    height: ImageLength,
    borderRadius: 10,
    marginRight: 15,
  },
  name: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'SFProDisplay-Regular',
    color: '#212227',
  },
});
