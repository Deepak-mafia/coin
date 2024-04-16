import {View, Text, ImageBackground} from 'react-native';
import React, {useEffect, useState} from 'react';
import SwipeToUnlock from './SwipeToUnlock';

export default function Splash({navigation}) {
  const toggle = () => {
    setTimeout(() => {
      setWhatToShow('ONBOARDIND');
    }, 2000);
  };
  useEffect(() => {
    toggle();
  }, []);
  const [whatToShow, setWhatToShow] = useState('SPLASH');
  const splash = () => (
    <ImageBackground
      style={{
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      source={require('../../assets/images/mainScreen.png')}>
      <Text style={{fontSize: 20, fontWeight: '500', color: '#fff'}}>
        CropSense
      </Text>
    </ImageBackground>
  );
  const onboarding = () => (
    <View style={{height: '100%', width: '100%', backgroundColor: 'green'}} />
  );
  return <View style={{flex: 1}}></View>;
}
