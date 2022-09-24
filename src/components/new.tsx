import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';

export const Newt = () =>  <Text style={styles.text}>New Text...</Text>;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'SFProDisplay-Regular',
    fontSize: 36,
  }
});
