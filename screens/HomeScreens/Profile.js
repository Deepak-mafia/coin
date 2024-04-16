// import React, {useState, useEffect} from 'react';
// import {Animated, StyleSheet, Text, View} from 'react-native';
// import {RectButton} from 'react-native-gesture-handler';
// import Swipeable from 'react-native-gesture-handler/Swipeable';
// import {useSharedValue} from 'react-native-reanimated';

// const Profile = () => {
//   let trans = useSharedValue(0);

//   const renderLeftActions = (progress, dragX) => {
//     const transValue = dragX.interpolate({
//       inputRange: [0, 50],
//       outputRange: [0, 1],
//     });
//     trans = transValue;

//     return (
//       <RectButton style={styles.leftAction} onPress={close}>
//         <Animated.Text
//           style={[
//             styles.actionText,
//             {
//               transform: [{translateX: trans}],
//             },
//           ]}>
//           Archive
//         </Animated.Text>
//       </RectButton>
//     );
//   };

//   const close = () => {
//     console.log('CLOSE');
//   };

//   return (
//     <Swipeable renderLeftActions={renderLeftActions}>
//       <View style={{padding: 10, backgroundColor: 'gray'}}>
//         <Text>"hello"</Text>
//       </View>
//     </Swipeable>
//   );
// };

// const styles = StyleSheet.create({
//   leftAction: {
//     backgroundColor: 'orange', // Change the color as needed
//     justifyContent: 'center',
//     flex: 1,
//   },
//   actionText: {
//     color: 'white',
//     fontWeight: '600',
//     padding: 20,
//   },
// });

// export default Profile;

// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   Dimensions,
//   Pressable,
// } from 'react-native';
// import React, {useRef, useState} from 'react';
// import {color} from '../../assets/appTheam';
// import {PanGestureHandler} from 'react-native-gesture-handler';
// import Animated, {
//   Extrapolate,
//   interpolate,
//   useAnimatedGestureHandler,
//   useAnimatedStyle,
//   useSharedValue,
//   withDelay,
//   withSpring,
// } from 'react-native-reanimated';

// export default function Profile({navigation}) {
//   const deviceWidth = Dimensions.get('screen').width;

//   // const animation = useRef(new Animated.Value(0)).current;
//   // const [val, setVal] = useState(1);

//   // const startAnimation = () => {
//   //   if (val > 4) {
//   //     setVal(0);
//   //   } else {
//   //     setVal(val + 1);
//   //   }

//   //   console.log(val, 'VALVALVAL');
//   //   Animated.spring(animation, {
//   //     toValue: val,
//   //     useNativeDriver: true,
//   //     // duration: 100,
//   //   }).start();
//   // };
//   // const [btn, setBtn] = useState(false);

//   const X = useSharedValue(10);
//   const animatedFunction = useAnimatedGestureHandler({
//     onActive: e => {
//       X.value = e.translationX;
//     },
//     onEnd: e => {
//       if (X.value > 200) {
//         X.value = withSpring(deviceWidth - 80);
//       } else {
//         X.value = withSpring(10);
//       }
//     },
//   });
//   const animatedStyle = useAnimatedStyle(() => {
//     return {
//       transform: [{translateX: X.value}],
//     };
//   });

//   const itm = useSharedValue(0);

//   const swipeAmimatedStyle = useAnimatedStyle(() => {
//     return {
//       transform: [{translateX: itm.value}],
//     };
//   });

//   const textStyle = useAnimatedStyle(() => {
//     return {
//       opacity: interpolate(X.value, [10, 200], [0.8, 0], Extrapolate.CLAMP),
//       transform: [
//         {
//           translateX: interpolate(
//             X.value,
//             [10, 200],
//             [0, 200],
//             Extrapolate.CLAMP,
//           ),
//         },
//       ],
//     };
//   });

//   const list = [
//     {
//       id: 1,
//       data: 'data 1',
//     },
//     {
//       id: 2,
//       data: 'data 2',
//     },
//     {
//       id: 3,
//       data: 'data 3',
//     },
//     {
//       id: 4,
//       data: 'data 4',
//     },
//     {
//       id: 5,
//       data: 'data 5',
//     },
//   ];

//   const swipeFunction = useAnimatedGestureHandler({
//     onActive: e => {
//       itm.value = -e.translationX;
//     },
//     onEnd: e => {
//       if (itm.value > 100) {
//         itm.value = withSpring(100);
//       } else {
//         itm.value = withSpring(0);
//       }
//     },
//   });

//   return (
//     <View style={styles.MainContainer}>
//       <View
//         style={{
//           width: '100%',
//           height: '80%',
//           borderColor: 'green',
//           borderWidth: 2,
//           // padding: 5,
//         }}>
//         {/* swipe to delete component */}
//         <Animated.FlatList
//           data={list}
//           keyExtractor={item => item.id}
//           renderItem={({item, index}) => {
//             return (
//               <View style={{flexDirection: 'row'}}>
//                 <PanGestureHandler onGestureEvent={swipeFunction}>
//                   <Animated.View
//                     style={[
//                       {
//                         backgroundColor: 'green',
//                         marginBottom: 10,
//                         alignItems: 'center',
//                         height: 50,
//                         width: '100%',
//                         flexDirection: 'row',
//                       },
//                       swipeAmimatedStyle,
//                     ]}>
//                     <View style={{width: '100%'}}>
//                       <Text>{item.data}</Text>
//                     </View>
//                     <Pressable
//                       onPress={() => {
//                         console.log('====================================');
//                         console.log(item.id);
//                         console.log('====================================');
//                       }}
//                       style={{
//                         backgroundColor: 'red',
//                         height: 50,
//                         width: 100,
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                       }}>
//                       <Text style={{}}>Delete</Text>
//                     </Pressable>
//                   </Animated.View>
//                 </PanGestureHandler>
//               </View>
//             );
//           }}
//         />

//         {/* Swipe to buy component */}
//         <View
//           style={{
//             width: '100%',
//             height: '100%',
//             alignItems: 'center',
//             justifyContent: 'center',
//             paddingHorizontal: 10,
//           }}>
//           <View
//             style={{
//               height: 60,
//               width: '100%',
//               backgroundColor: 'gray',
//               borderRadius: 50,
//               padding: 5,
//               alignItems: 'center',
//               // justifyContent: 'center',
//               flexDirection: 'row',
//             }}>
//             <PanGestureHandler onGestureEvent={animatedFunction}>
//               <Animated.View
//                 style={[
//                   {
//                     width: 40,
//                     height: 40,
//                     borderRadius: 40,
//                     backgroundColor: 'yellow',
//                   },
//                   animatedStyle,
//                 ]}></Animated.View>
//             </PanGestureHandler>
//             <Animated.Text style={[textStyle, {fontSize: 18, marginLeft: 15}]}>
//               Swipe to buy
//             </Animated.Text>
//           </View>
//         </View>

//         {/* Move one place to another component */}
//         {/* <View style={{ width: 200, height: 200, borderColor: "green", borderWidth: 1, borderRadius: 100, backgroundColor: "gray" }}> */}
//         {/* <Animated.View
//           style={[
//             {
//               width: 100,
//               height: 100,
//               borderColor: 'green',
//               borderWidth: 1,
//               borderRadius:
//                 // btn ?
//                 25,
//               //  : 0
//               alignItems: 'center',
//               justifyContent: 'center',
//               backgroundColor: 'red',
//             },
//             {
//               transform: [
//                 {
//                   translateY: animation.interpolate({
//                     inputRange: [0, 1],
//                     outputRange: [0, 100],
//                   }),
//                 },
//                 {
//                   translateX: animation.interpolate({
//                     inputRange: [0, 1],
//                     outputRange: [0, 150],
//                   }),
//                 },
//                 {
//                   rotate: animation.interpolate({
//                     inputRange: [0, 1],
//                     outputRange: ['0deg', '360deg'],
//                   }),
//                 },
//                 {
//                   scale: animation.interpolate({
//                     inputRange: [0, 1],
//                     outputRange: [1, 1],
//                   }),
//                 },
//               ],
//             },
//           ]}>
//           <Text>660</Text>
//         </Animated.View> */}
//         {/* <Animated.View
//           style={[
//             {
//               width: 100,
//               height: 100,
//               borderColor: 'green',
//               borderWidth: 1,
//               borderRadius:
//                 // btn ?
//                 25,
//               //  : 0
//               alignItems: 'center',
//               justifyContent: 'center',
//               backgroundColor: 'red',
//             },
//             {
//               transform: [
//                 // {
//                 //   translateY: animation.interpolate({
//                 //     inputRange: [0, 1],
//                 //     outputRange: [0, 100],
//                 //   }),
//                 // },
//                 {
//                   translateX: animation.interpolate({
//                     inputRange: [0, 1, 2, 3, 4, 5],
//                     outputRange: [0, 50, 100, 150, 200, 250],
//                   }),
//                 },
//                 // {
//                 //   rotate: animation.interpolate({
//                 //     inputRange: [0, 1],
//                 //     outputRange: ['0deg', '360deg'],
//                 //   }),
//                 // },
//                 // {
//                 //   scale: animation.interpolate({
//                 //     inputRange: [0, 1],
//                 //     outputRange: [1, 1],
//                 //   }),
//                 // },
//               ],
//             },
//           ]}>
//           <Text>660</Text>
//         </Animated.View> */}
//       </View>

//       {/* <TouchableOpacity
//         style={styles.btnEnable}
//         onPress={() => {
//           setBtn(!btn);
//           startAnimation();
//         }}>
//         <Text style={styles.btnText}>Continue</Text>
//       </TouchableOpacity> */}
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   Modal: {
//     width: '100%',
//     height: '30%',
//     justifyContent: 'space-evenly',
//     alignItems: 'center',
//     bottom: 0,
//     backgroundColor: '#ECF3F3',
//     position: 'absolute',
//   },
//   MainContainer: {
//     flex: 1,
//     justifyContent: 'space-between',
//   },
//   TextPrimery: {
//     fontSize: 24,
//     color: '#09352F',
//     fontWeight: '600',
//   },
//   TextSecoundry: {
//     fontSize: 16,
//     color: '#6B6B6B',
//   },
//   space: {
//     marginBottom: 20,
//   },
//   image: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'space-between',
//   },
//   btnEnable: {
//     backgroundColor: 'gray',
//     height: 50,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 50,
//     bottom: 30,
//   },
//   btnDisable: {
//     backgroundColor: color.disableButton,
//     height: 50,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 50,
//     bottom: 30,
//   },
//   btnText: {
//     color: color.white,
//     fontSize: 18,
//   },
//   TextInput: {
//     height: 20,
//     width: 20,
//     borderColor: '#09352F',
//     borderWidth: 2,
//     borderRadius: 4,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginRight: 10,
//   },
//   Text: {
//     color: color.Heading,
//     fontSize: 16,
//   },
// });

import {View, Text, StyleSheet, TouchableOpacity, Animated} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {color} from '../../assets/appTheam';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Marquee} from '@animatereactnative/marquee';

export default function Profile({navigation}) {
  const animation = useRef(new Animated.Value(0)).current;
  const animation1 = useRef(new Animated.Value(0)).current;

  const [val, setVal] = useState(1);
  const [val1, setVal1] = useState(1);

  const startAnimation = () => {
    // if (val > 3) {
    //   setVal(0);
    // } else {
    //   setVal(val + 1);
    // }
    if (val == 0) setVal(1);
    if (val == 1) setVal(0);
    if (val1 == 0) setVal1(1);
    if (val1 == 1) setVal1(0);

    Animated.spring(animation, {
      toValue: val,
      useNativeDriver: true,
      // duration: 100,
    }).start();
    Animated.spring(animation1, {
      toValue: val1,
      useNativeDriver: true,
      // duration: 100,
    }).start();
  };

  const startGame = () => {
    setPlayer1Status(true);
  };

  const toggle = () => {
    if (player1Status) {
      setPlayer1Status(false);
      setPlayer2Status(true);
    } else {
      setPlayer1Status(true);
      setPlayer2Status(false);
    }
  };

  const [player1Status, setPlayer1Status] = useState(false);
  const [player2Status, setPlayer2Status] = useState(false);
  const [timer1, setTimer1] = useState(100);
  const [timer2, setTimer2] = useState(100);

  useEffect(() => {
    if (player1Status) {
      setTimeout(() => {
        setTimer1(timer1 - 1);
      }, 1000);
    }
    if (player2Status) {
      setTimeout(() => {
        setTimer2(timer2 - 1);
      }, 1000);
    }
  }, [timer1, timer2, player1Status]);

  return (
    <View style={styles.MainContainer}>
      <View
        style={{
          width: '100%',
          height: '80%',
          borderColor: 'green',
          borderWidth: 2,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          // padding: 5,
        }}>
        <Text style={{fontSize: 32, color: 'black'}}>{timer1}</Text>
        <Text style={{fontSize: 32, color: 'black'}}> - </Text>
        <Text style={{fontSize: 32, color: 'black'}}>{timer2}</Text>
        {/* <View
          style={{
            position: 'absolute',
            bottom: 20,
            right: 20,
            padding: 10,
            backgroundColor: 'blue',
            borderRadius: 50,
          }}>
          <AntDesign name="plus" size={22} color="black" />
        </View> */}
        {/* 
        <View
          style={{
            position: 'absolute',
            bottom: 40,
            right: 40,
            padding: 10,
          }}>
          <AntDesign name="home" size={22} color="black" />
        </View>

        <View
          style={{
            position: 'absolute',
            bottom: 40,
            right: 40,
            padding: 10,
          }}>
          <AntDesign name="home" size={22} color="black" />
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 40,
            right: 40,
            padding: 10,
          }}>
          <AntDesign name="caretdown" size={22} color="black" />
        </View> */}

        {/* <View style={{ width: 200, height: 200, borderColor: "green", borderWidth: 1, borderRadius: 100, backgroundColor: "gray" }}> */}
        {/* <Animated.View
          style={[
            {
              width: 100,
              height: 100,
              borderColor: 'green',
              borderWidth: 1,
              borderRadius:
                // btn ?
                25,
              //  : 0
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'red',
            },
            {
              transform: [
                {
                  translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 100],
                  }),
                },
                {
                  translateX: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 150],
                  }),
                },
                {
                  rotate: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '360deg'],
                  }),
                },
                {
                  scale: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 1],
                  }),
                },
              ],
            },
          ]}>
          <Text>660</Text>
        </Animated.View> */}
        {/* <View
          style={{
            width: 300,
            height: 100,
            backgroundColor: 'gray',
            flexDirection: 'row',
          }}>
          <Animated.View
            style={[
              {
                width: 100,
                height: 100,
                borderColor: 'green',
                borderWidth: 1,
                borderRadius:
                  // btn ?
                  25,
                //  : 0
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'red',
                // position: 'absolute',
              },
              {
                transform: [
                  // {
                  //   translateY: animation.interpolate({
                  //     inputRange: [0, 1],
                  //     outputRange: [0, 100],
                  //   }),
                  // },
                  {
                    translateY: animation.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, 200],
                    }),
                  },
                  // {
                  //   rotate: animation.interpolate({
                  //     inputRange: [0, 1],
                  //     outputRange: ['0deg', '360deg'],
                  //   }),
                  // },
                  // {
                  //   scale: animation.interpolate({
                  //     inputRange: [0, 1],
                  //     outputRange: [1, 1],
                  //   }),
                  // },
                ],
              },
            ]}>
            <Text>660</Text>
          </Animated.View>

          <Animated.View
            style={[
              {
                width: 100,
                height: 100,
                borderColor: 'green',
                borderWidth: 1,
                borderRadius:
                  // btn ?
                  25,
                //  : 0
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'red',
                position: 'absolute',
              },
              {
                transform: [
                  // {
                  //   translateY: animation.interpolate({
                  //     inputRange: [0, 1],
                  //     outputRange: [0, 100],
                  //   }),
                  // },
                  {
                    translateY: animation1.interpolate({
                      inputRange: [0, 1],
                      outputRange: [200, 0],
                    }),
                  },
                  // {
                  //   rotate: animation.interpolate({
                  //     inputRange: [0, 1],
                  //     outputRange: ['0deg', '360deg'],
                  //   }),
                  // },
                  // {
                  //   scale: animation.interpolate({
                  //     inputRange: [0, 1],
                  //     outputRange: [1, 1],
                  //   }),
                  // },
                ],
              },
            ]}>
            <Text>290</Text>
          </Animated.View>
        </View> */}
      </View>

      {/* <Marquee spacing={20} speed={1}>
        <Text>helloi</Text>
      </Marquee> */}

      <TouchableOpacity style={styles.btnEnable} onPress={startGame}>
        <Text style={styles.btnText}>Start</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnEnable} onPress={toggle}>
        <Text style={styles.btnText}>Toggle</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  Modal: {
    width: '100%',
    height: '30%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    bottom: 0,
    backgroundColor: '#ECF3F3',
    position: 'absolute',
  },
  MainContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  TextPrimery: {
    fontSize: 24,
    color: '#09352F',
    fontWeight: '600',
  },
  TextSecoundry: {
    fontSize: 16,
    color: '#6B6B6B',
  },
  space: {
    marginBottom: 20,
  },
  image: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  btnEnable: {
    backgroundColor: 'gray',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    bottom: 30,
  },
  btnDisable: {
    backgroundColor: color.disableButton,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    bottom: 30,
  },
  btnText: {
    color: color.white,
    fontSize: 18,
  },
  TextInput: {
    height: 20,
    width: 20,
    borderColor: '#09352F',
    borderWidth: 2,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  Text: {
    color: color.Heading,
    fontSize: 16,
  },
});
