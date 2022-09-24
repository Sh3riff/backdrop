import React from 'react';
import {StyleSheet} from 'react-native';
import {CatIcon, BottomTabLoveIcon} from '~assets/svg'

type IBottomTabIcon = {
    name?: 'cats' | 'favs';
    color?: string
}
export const BottomTabIcon = ({name = 'cats', color = '#212227'}: IBottomTabIcon) => name === 'cats' ? <CatIcon fill={color} /> : <BottomTabLoveIcon fill={color} />

const styles = StyleSheet.create({
    tabLabel: {
      fontSize: 13,
      fontFamily: 'SFProDisplay-Regular',
      color: 'grey'
    }
})