import {View, Text, Dimensions} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Chats from './Chats';
import Friends from './Friends';
import Profile from './Profile';
import {color} from '../../assets/appTheam';

export default function HomeNavigator() {
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator
      scrollEnabled={true}
      tabBarPosition="top"
      initialRouteName="FirstRoute"
      screenOptions={{
        tabBarActiveTintColor: color.primery,
        tabBarLabelStyle: {fontSize: 12},
        tabBarStyle: {backgroundColor: 'powderblue', width: '100%'},
        tabBarItemStyle: {width: Dimensions.get('window').width / 3},
        tabBarScrollEnabled: true,
      }}>
      <Tab.Screen
        name="Chats"
        component={Chats}
        options={{
          tabBarLabel: 'Chats',
          tabBarLabelStyle: {
            color: 'black',
            fontSize: 15,
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
            fontSize: 15,
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
            fontSize: 15,
          },
        }}
      />
      {/* <Tab.Screen
        name="SecondRoute1"
        component={SecondRoute1}
        options={{tabBarLabel: 'Liat 4'}}
      />
      <Tab.Screen
        name="FirstRoute2"
        component={FirstRoute2}
        options={{tabBarLabel: 'List 3'}}
      />
      <Tab.Screen
        name="SecondRoute2"
        component={SecondRoute2}
        options={{tabBarLabel: 'Liat 4'}}
      /> */}
    </Tab.Navigator>
  );
}
