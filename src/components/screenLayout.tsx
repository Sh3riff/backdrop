import React from 'react';
import {StyleSheet, View, Text, SafeAreaView, StatusBar} from 'react-native';

type IScreenLayout = {
    title?: string;
    children?: React.ReactNode;
}
export const ScreenLayout = ({title, children}: IScreenLayout) => (
    <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle='dark-content' />
        <View style={styles.headerView}>
            <Text  style={styles.headerText}>{title || ''}</Text>
        </View>
        {children}
    </SafeAreaView>
)

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    layout: {
      height:  74,
      paddingLeft: 25,
      justifyContent: 'center'
    },
    headerView: {
      height:  74,
      paddingLeft: 25,
      justifyContent: 'center'
    },
    headerText: {
      fontSize: 16,
      fontFamily: 'SFProDisplay-Semibold',
      color: '#212227'
    }
})