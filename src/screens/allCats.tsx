import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScreenLayout, CatListItem} from '~components'

// id url breeds[0]?.name

const sample = {
  "breeds": [
    {
      "name": "Abyssinian",
    }
  ],
  "id": "rRLX_RH_o",
  "url": "https://cdn2.thecatapi.com/images/rRLX_RH_o.jpg",
  "width": 299,
  "height": 168
}

export const AllCats = () => {
  return (
    <ScreenLayout title="All Cats">
      <View style={styles.view}>
        <CatListItem item={sample}/>
      </View>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: 24
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  text: {
    fontFamily: 'SFProDisplay-Regular',
    fontSize: 36,
  }
});