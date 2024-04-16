import {View, Text, ImageBackground} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainStack, farm} from './navigation/NavigationStack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();
export default function App() {
  const toggle = () => {
    setTimeout(() => {
      setWhatToShow('ONBOARDIND');
    }, 2000);
  };
  (async () => {
    try {
      const value = await AsyncStorage.getItem('lang');
      if (value == null) {
        await AsyncStorage.setItem('lang', 'en');
      }
    } catch (e) {
      console.log('ERRssssOR: ' + e.message);
    }
  })();

  // useEffect(() => {
  //   const getlang = async () => {
  //     const value = await AsyncStorage.getItem('lang');
  //     console.log('VALL', value);
  //     if (value == null) {
  //       await AsyncStorage.setItem('lang', value);
  //     }
  //   };
  // }, []);

  const [whatToShow, setWhatToShow] = useState('SPLASH');
  const splash = () => (
    <ImageBackground
      style={{
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      source={require('./assets/images/mainScreen.png')}>
      <Text style={{fontSize: 20, fontWeight: '500', color: '#fff'}}>
        CropSense
      </Text>
    </ImageBackground>
  );
  const onboarding = () => (
    <View style={{height: '100%', width: '100%', backgroundColor: 'green'}} />
  );

  return (
    <>
      {/* {whatToShow === 'SPLASH' ? (
        splash()
      ) : ( */}
      <View style={{flex: 1}}>
        <GestureHandlerRootView style={{flex: 1}}>
          <NavigationContainer>{MainStack()}</NavigationContainer>
        </GestureHandlerRootView>
      </View>
      {/* )} */}
    </>
  );
}
