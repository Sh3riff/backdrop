import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AllCats, FavCats } from '~screens';
import {BottomTablabel} from '~components'


const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerShown: false
        }}>
        <Tab.Screen
          name="All cats"
          component={AllCats}
          options={{
            tabBarLabel: ({focused}) => <BottomTablabel label="All cats" focused={focused}/>
          }}
        />
        <Tab.Screen
          name="Cats I like"
          component={FavCats}
          options={{
            tabBarLabel: ({focused}) => <BottomTablabel label="Cats I like" focused={focused}/>
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};


export default App;
