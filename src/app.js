/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'native-base';
import {HomeScreen} from './screens/home-screen';
const Tab = createBottomTabNavigator();


const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                  iconName = 'home'
                } else if (route.name === 'Search') {
                  iconName = 'search'
                } else if (route.name === 'Add') {
                    iconName = 'plus-square-o'
                } else if (route.name === 'Favorites') {
                    iconName = 'heart'
                } else if (route.name === 'Profile') {
                    iconName = 'user-o'
                }
                return <Icon type="FontAwesome" name={iconName} style={{color:focused?'tomato':'black',fontSize:30}}/>
              },
            })}
            tabBarOptions={{
              activeTintColor: 'tomato',
              inactiveTintColor: 'gray',
              showLabel: false
            }}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Search" component={HomeScreen} />
          <Tab.Screen name="Add" component={HomeScreen} />
          <Tab.Screen name="Favorites" component={HomeScreen} />
          <Tab.Screen name="Profile" component={HomeScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};



export default App;
