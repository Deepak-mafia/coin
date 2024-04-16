import {View, Image, Pressable, Animated} from 'react-native';
import React, {useRef, useState} from 'react';

export default function ToggleBtn({navigation}) {
  const animation = useRef(new Animated.Value(0)).current;
  const startAnimation = () => {
    Animated.spring(animation, {
      toValue: btn ? 0 : 1,
      useNativeDriver: true,
      // duration: 100,
    }).start();
  };

  const [btn, setBtn] = useState(false);
  return (
    <View style={{flex: 1}}>
      <Pressable
        onPress={() => {
          setBtn(!btn);
          startAnimation();
        }}
        style={{
          position: 'absolute',
          width: 60,
          height: 60,
          zIndex: 10,
          bottom: 40,
          right: 40,
        }}>
        {!btn ? (
          <Image source={require('../../assets/images/Comp1.png')} />
        ) : (
          <Image source={require('../../assets/images/Comp2.png')} />
        )}
      </Pressable>
      <Animated.View
        style={[
          {
            position: 'absolute',
            width: 40,
            height: 50,
            bottom: 40,
            right: 40,
          },
          {
            transform: [
              {
                translateY: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -100],
                }),
              },
              {
                translateX: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -100],
                }),
              },
            ],
          },
        ]}>
        <Pressable onPress={() => navigation.navigate('MainMenu')}>
          <Image
            style={{height: '100%', width: '100%'}}
            resizeMode="stretch"
            source={require('../../assets/images/MainMenu.png')}
          />
        </Pressable>
      </Animated.View>
      <Animated.View
        style={[
          {
            position: 'absolute',
            width: 40,
            height: 50,
            bottom: 40,
            right: 40,
          },
          {
            transform: [
              {
                translateY: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -100],
                }),
              },
            ],
          },
        ]}>
        <Pressable onPress={() => navigation.navigate('Profile')}>
          <Image
            style={{height: '100%', width: '100%'}}
            resizeMode="stretch"
            source={require('../../assets/images/Profile.png')}
          />
        </Pressable>
      </Animated.View>
      <Animated.View
        style={[
          {
            position: 'absolute',
            width: 40,
            height: 50,
            bottom: 40,
            right: 40,
          },
          {
            transform: [
              {
                translateX: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -100],
                }),
              },
            ],
          },
        ]}>
        <Pressable onPress={() => navigation.navigate('ChatwithYourExpert')}>
          <Image
            style={{height: '100%', width: '100%'}}
            resizeMode="stretch"
            source={require('../../assets/images/Expert.png')}
          />
        </Pressable>
      </Animated.View>
    </View>
  );
}
