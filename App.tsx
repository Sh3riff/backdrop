import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {Newt} from '~components/new'

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle="dark-content"
        // backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.view}>
        <Text style={styles.text}>Gg Ff</Text>
        <Newt />
      </View>
    </SafeAreaView>
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

export default App;
