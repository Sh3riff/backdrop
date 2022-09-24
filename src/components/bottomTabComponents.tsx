import React from 'react';
import { StyleSheet, Text } from 'react-native';

export const BottomTablabel = ({label, focused}) => (
    <Text style={[styles.tabLabel, focused && {color: '#212227'}]}>{label}</Text>
)

// tabBarIcon: ({ color, size }) => (
            //   <MaterialCommunityIcons name="home" color={color} size={size} />
            // ),

const styles = StyleSheet.create({
    tabLabel: {
      fontSize: 13,
      fontFamily: 'SFProDisplay-Regular',
      color: 'grey'
    }
})