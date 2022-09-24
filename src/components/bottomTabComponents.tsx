import React from 'react';
import {CatIcon, BottomTabLoveIcon} from '~assets/svg';

type IBottomTabIcon = {
  name?: 'cats' | 'favs';
  color?: string;
};
export const BottomTabIcon = ({
  name = 'cats',
  color = '#212227',
}: IBottomTabIcon) =>
  name === 'cats' ? (
    <CatIcon fill={color} />
  ) : (
    <BottomTabLoveIcon fill={color} />
  );

