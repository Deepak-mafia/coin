import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  Animated,
  Easing,
  Image,
  ImageBackground,
  StyleSheet,
  PanResponder,
} from 'react-native';

const SwipeUpToUnlock = ({navigation}) => {
  const [spinValue] = useState(new Animated.Value(0));

  const spin = spinValue.interpolate({
    inputRange: [0, 1, 2, 3],
    outputRange: [`0deg`, `90deg`, `180deg`, `270deg`],
  });
  const [val, setVal] = useState(1);
  const handleRotate = () => {
    setVal(val + 1);

    console.log(val, 'spinValue');
    Animated.timing(spinValue, {
      toValue: val,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {});
  };

  const ary = [
    {
      head: 'Monitor Crops',
      title:
        'Welcome to CropSense where you can effortlessly monitor individual crops, access real-time data on growth, soil moisture, nutrients, pests, and diseases, and make informed decisions for optimized crop production.',
    },
    {
      head: 'Stay Informed',
      title:
        'Our platform includes a notification system that keeps you informed of critical updates, including weather-related risks and disease outbreaks, ensuring timely implementation of fertilization schedules, irrigation adjustments, and pest control measures.',
    },
    {
      head: 'Connect with Experts',
      title:
        'Our user-friendly interface allows you to easily initiate and manage expert consultations, facilitating scheduling, messaging, and file sharing for seamless communication with agricultural experts.',
    },
    {
      head: 'Share your learning',
      title:
        'Our interface provides easy navigation, categorization, and search functionality within the community section, enabling farmers to engage in discussions, share experiences, and seek advice from peers in a seamless manner.',
    },
  ];
  const slideAnimation = useRef(new Animated.Value(0)).current;
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    if (unlocked) {
      navigation.navigate('Login');
      console.log('Unlocked!');
      setUnlocked(false);
      Animated.spring(slideAnimation, {
        toValue: 0,
        friction: 1,
        useNativeDriver: true,
      }).start();
    }
  }, [unlocked]);
  const handleUnlock = () => {
    if (slideAnimation._value < -100) {
      setUnlocked(true);
    } else {
      Animated.spring(slideAnimation, {
        toValue: 0,
        friction: 1,
        useNativeDriver: true,
      }).start();
    }
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
      Animated.event([null, {dy: slideAnimation}])(_, gestureState);
    },
    onPanResponderRelease: handleUnlock,
  });

  const slideStyle = {
    transform: [{translateY: slideAnimation}],
  };

  const [translateX] = useState(new Animated.Value(0));

  const panResponder1 = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([null, {dx: translateX}], {
      useNativeDriver: false,
    }),
    onPanResponderRelease: (_, gestureState) => {
      if (val < 4 && gestureState.dx < -50) {
        handleRotate();
        Animated.timing(translateX, {
          toValue: 0,
          duration: 200,
          useNativeDriver: false,
        }).start();
      }
    },
  });

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ImageBackground
        style={{
          height: '100%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}
        source={require('../../assets/images/mainScreen.png')}>
        {/* <Text style={{fontSize: 20, fontWeight: '500', color: '#fff'}}>
          CropSense
        </Text> */}
        <Animated.View
          style={[
            {
              width: '200%',
              height: '100%',
              position: 'absolute',
              top: -400,
              transform: [{rotate: spin}],
            },
          ]}>
          <View style={{width: '100%', height: '100%'}}>
            <Image
              source={require('../../assets/images/AnimationImage.png')}
              style={{width: '100%', height: '100%'}}
            />
          </View>
        </Animated.View>
        <View style={{}}>
          <View style={{padding: 10}}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 24,
                color: '#269237',
                marginBottom: 20,
              }}>
              {ary[val - 1].head}
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 14,
                color: '#000',
                marginBottom: 20,
                lineHeight: 25,
              }}>
              {ary[val - 1].title}
            </Text>
          </View>
        </View>

        {val < 4 ? (
          <View style={{flexDirection: 'row'}}>
            {[1, 1, 1, 1].map((e, index) => {
              return (
                <View
                  style={{
                    width: 80,
                    height: 10,
                    borderRadius: 30,
                    backgroundColor: index === val - 1 ? '#269237' : 'gray',
                    marginHorizontal: 10,
                    marginBottom: 10,
                  }}></View>
              );
            })}
          </View>
        ) : (
          <Animated.View
            style={[styles.slider, slideStyle]}
            {...panResponder.panHandlers}>
            <Image
              style={{height: 50, width: 60}}
              resizeMode="stretch"
              source={require('../../assets/images/Swipe.png')}
            />
          </Animated.View>
        )}
      </ImageBackground>
      <Animated.View
        {...panResponder1.panHandlers}
        style={{
          width: val < 4 ? '70%' : '1%',
          height: '100%',
          position: 'absolute',
          right: 0,
          transform: [{translateX}],
        }}></Animated.View>
    </View>
  );
};

export default SwipeUpToUnlock;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  slider: {
    position: 'absolute',
    bottom: 0,
    marginVertical: 20,
    alignSelf: 'center',
    width: '100%',
    // backgroundColor: 'blue',
    alignItems: 'center',
  },
  sliderText: {
    textAlign: 'center',
    color: 'gray',
    // fontSize: 18,
    padding: 0,
  },
});
