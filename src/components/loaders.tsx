import React from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';

type IScreenLayout = {
  title?: string;
  children?: React.ReactNode;
};
export const ScreenLoader = () => (
  <View style={styles.view}>
    <ActivityIndicator size="large" color="#212227" />
  </View>
);

export const ListLoader = () => (
  <ActivityIndicator size="small" color="#212227" />
);

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});