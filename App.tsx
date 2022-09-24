import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle="dark-content"
        // backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.view}>
        <Text>All cats Cats I like</Text>
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
});

export default App;
