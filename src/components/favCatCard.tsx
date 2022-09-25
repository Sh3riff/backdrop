import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Dimensions,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {LoveIcon} from '~assets/svg';
import {useDeleteFavoriteCats} from '~hook';

type ICatListItem = {
  item: {
    id: string;
    name: string;
    image: {
      id: string;
      url: string;
    };
  };
};

const deviceWidth = Dimensions.get('window').width;
const imageLength = deviceWidth / 2 - 36;
const textHeight = 24;
const marginBottom = 25;

export const FaveCatCardHeight = imageLength + textHeight + marginBottom;

export const FaveCatCard = ({item}: ICatListItem) => {
  const {mutate: deleteFavCat, error} = useDeleteFavoriteCats();
  return (
    <TouchableOpacity
      style={{marginBottom}}
      onPress={() => deleteFavCat(item.id)}>
      <FastImage
        style={[styles.image, {width: imageLength, height: imageLength}]}
        source={{uri: item?.image?.url}}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={styles.infoArea}>
        <Text style={styles.name}>{item.name}</Text>
        <LoveIcon fill="#DE0202" stroke="#DE0202" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    borderRadius: 10,
    marginBottom: 5,
  },
  infoArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    lineHeight: textHeight,
    fontFamily: 'SFProDisplay-Regular',
    color: '#212227',
  },
});
