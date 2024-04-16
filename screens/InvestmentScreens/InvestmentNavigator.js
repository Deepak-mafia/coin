import {View, Text, Dimensions} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {color} from '../../assets/appTheam';
import Chats from '../HomeScreens/Chats';
import Friends from '../HomeScreens/Friends';
import Profile from '../HomeScreens/Profile';

const SecondRoute1 = () => (
  <View style={{flex: 1, backgroundColor: 'red'}}></View>
);
const FirstRoute2 = () => (
  <View style={{flex: 1, backgroundColor: 'green'}}></View>
);
const SecondRoute2 = () => (
  <View style={{flex: 1, backgroundColor: 'blue'}}></View>
);

export default function InvestmentNavigator() {
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator
      scrollEnabled={true}
      tabBarPosition="top"
      initialRouteName="FirstRoute"
      screenOptions={{
        tabBarActiveTintColor: color.primery,
        tabBarLabelStyle: {fontSize: 8},
        tabBarStyle: {backgroundColor: 'powderblue', width: '100%'},
        tabBarItemStyle: {width: Dimensions.get('window').width / 4.5},
        tabBarScrollEnabled: true,
      }}>
      <Tab.Screen
        name="Chats"
        component={Chats}
        options={{
          tabBarLabel: 'Chats',
          tabBarLabelStyle: {
            color: 'black',
            fontSize: 12,
          },
        }}
      />
      <Tab.Screen
        name="Friends"
        component={Friends}
        options={{
          tabBarLabel: 'Friends',
          tabBarLabelStyle: {
            color: 'black',
            fontSize: 12,
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarLabelStyle: {
            color: 'black',
            fontSize: 12,
          },
        }}
      />
      <Tab.Screen
        name="SecondRoute1"
        component={SecondRoute1}
        options={{
          tabBarLabel: 'Liat 4',
          tabBarLabelStyle: {
            color: 'black',
            fontSize: 12,
          },
        }}
      />
      <Tab.Screen
        name="FirstRoute2"
        component={FirstRoute2}
        options={{
          tabBarLabel: 'List 3',
          tabBarLabelStyle: {
            color: 'black',
            fontSize: 12,
          },
        }}
      />
      <Tab.Screen
        name="SecondRoute2"
        component={SecondRoute2}
        options={{
          tabBarLabel: 'Liat 4',
          tabBarLabelStyle: {
            color: 'black',
            fontSize: 12,
          },
        }}
      />
    </Tab.Navigator>
  );
}
