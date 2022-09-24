import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {QueryClient, QueryClientProvider} from 'react-query';
import {AllCats, FavCats} from '~screens';
import {BottomTabIcon} from '~components';

const Tab = createBottomTabNavigator();
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarLabelStyle: styles.tabLabel,
            tabBarActiveTintColor: '#212227',
          }}>
          <Tab.Screen
            name="All cats"
            component={AllCats}
            options={{
              tabBarIcon: ({color}) => (
                <BottomTabIcon color={color} name="cats" />
              ),
            }}
          />
          <Tab.Screen
            name="Cats I like"
            component={FavCats}
            options={{
              tabBarIcon: ({color}) => (
                <BottomTabIcon color={color} name="favs" />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  tabLabel: {
    fontSize: 13,
    fontFamily: 'SFProDisplay-Regular',
  },
});
