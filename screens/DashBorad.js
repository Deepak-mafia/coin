import * as React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './Home';
import Investment from './Investment';
import Account from './Account';
import Discover from './Discover';
import {useTranslation} from 'react-i18next';

const Tab = createBottomTabNavigator();

export default function DashBorad() {
  const {t} = useTranslation();

  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'white',
        },
        keyboardHidesTabBar: true,
        tabBarBackground: () => (
          <View
            style={{
              width: '100%',
            }}></View>
        ),
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        tabBarShowLabel={true}
        options={{
          tabBarShowLabel: false,
          tabBarLabelStyle: {color: '#fff'},
          tabBarLabelPosition: 'below-icon',
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
              }}>
              <Feather
                name="home"
                size={22}
                color={focused ? '#387ed1' : 'black'}
              />
              <Text
                style={{
                  color: focused ? '#387ed1' : 'black',
                  fontFamily: 'Outfit-Light',
                  width: '100%',
                  textAlign: 'center',
                  fontSize: 15,
                  //   marginTop: 5,
                }}>
                {t('home')}
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Investment"
        component={Investment}
        tabBarShowLabel={true}
        options={{
          tabBarShowLabel: false,
          tabBarLabelStyle: {color: '#fff'},
          tabBarLabelPosition: 'below-icon',
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
              }}>
              <Ionicons
                name="bag-outline"
                size={22}
                color={focused ? '#387ed1' : 'black'}
              />

              <Text
                style={{
                  color: focused ? '#387ed1' : 'black',
                  fontFamily: 'Outfit-Light',
                  width: '100%',
                  textAlign: 'center',
                  fontSize: 15,
                }}>
                {t('investment')}
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Discover"
        component={Discover}
        tabBarShowLabel={true}
        options={{
          tabBarShowLabel: false,
          tabBarLabelStyle: {color: '#fff'},
          tabBarLabelPosition: 'below-icon',
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
              }}>
              <Feather
                name="search"
                size={22}
                color={focused ? '#387ed1' : 'black'}
              />
              <Text
                style={{
                  color: focused ? '#387ed1' : 'black',
                  fontFamily: 'Outfit-Light',
                  width: '100%',
                  textAlign: 'center',
                  fontSize: 15,
                }}>
                {t('Discover')}
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        tabBarShowLabel={true}
        options={{
          tabBarShowLabel: false,
          tabBarLabelStyle: {color: '#fff'},
          tabBarLabelPosition: 'below-icon',
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
              }}>
              <MaterialCommunityIcons
                name="account-outline"
                size={22}
                color={focused ? '#387ed1' : 'black'}
              />

              <Text
                style={{
                  color: focused ? '#387ed1' : 'black',
                  fontFamily: 'Outfit-Light',
                  width: '100%',
                  textAlign: 'center',
                  fontSize: 15,
                }}>
                Account
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
