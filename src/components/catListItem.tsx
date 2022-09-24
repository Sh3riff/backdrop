import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image'
import {LoveIcon} from '~assets/svg'

type ICatListItem = {
    item: {
        url: string;
        breeds?: {name: string}[];
    }
}
export const CatListItem = ({item}: ICatListItem) => { // FastImage.resizeMode.cover
    const {url, breeds} = item
    const name = breeds?.length ? breeds[0].name : 'No Name'
    const isLiked = false
    return(
        <TouchableOpacity style={styles.touch}>
            <View style={styles.infoArea}>
                <FastImage
                    style={styles.image}
                    source={{uri: url}}
                    resizeMode={FastImage.resizeMode.cover}
                />
                <Text style={styles.name}>{name}</Text>
            </View>
            <LoveIcon fill={isLiked ? '#DE0202' : '#ffffff'} stroke={isLiked ? '#DE0202' : '#212227'}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    touch: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    infoArea: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
      width: 40, 
      height: 40,
      borderRadius: 10,
      marginRight: 15
    },
    name: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: 'SFProDisplay-Regular',
      color: '#212227'
    }
})