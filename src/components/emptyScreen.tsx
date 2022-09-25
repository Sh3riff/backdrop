import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export const EmptyScreen = ({message}: {message?: string}) => (
  <View style={styles.view}>
    <Text style={styles.text}>
      {message || 'Choose a favourite cat to view them here'}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontFamily: 'SFProDisplay-Semibold',
    color: '#212227',
    textAlign: 'center',
  },
});
