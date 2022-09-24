import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScreenLayout} from '~components'

export const AllCats = () => {
  return (
    <ScreenLayout title="All Cats">
      <View style={styles.view}>
        <Text style={styles.text}>All cats</Text>
      </View>
    </ScreenLayout>
  );
};

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