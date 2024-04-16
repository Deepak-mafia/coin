import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import {whatsappDummt} from '../../constants/whatsAppDummy';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Friends from './Friends';
import Profile from './Profile';

export default function chat({navigation}) {
  const [data, setData] = useState(whatsappDummt.profile.friends);

  const retriveChat = e => {
    const dta = whatsappDummt.friends.filter(a => {
      return a.id === e.id;
    });
    return dta;
  };
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
        component={chat}
        options={{
          tabBarLabel: 'Chattttt',
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

  // return (
  //   <ScrollView>
  //     {data.map((e, i) => {
  //       return (
  //         <Pressable
  //           onPress={() => {
  //             navigation.navigate('Chatlog', {
  //               data: retriveChat(e),
  //             });
  //           }}
  //           style={{
  //             paddingVertical: 5,
  //             marginHorizontal: 10,
  //             flexDirection: 'row',
  //           }}>
  //           <View
  //             style={{
  //               width: '15%',
  //               height: 60,
  //               borderRadius: 50,
  //             }}>
  //             <Image
  //               source={{uri: e.picture}}
  //               style={{width: '100%', height: '100%', borderRadius: 50}}
  //             />
  //           </View>
  //           <View
  //             style={{
  //               width: '85%',
  //               paddingHorizontal: 8,
  //               justifyContent: 'space-evenly',
  //             }}>
  //             <View
  //               style={{flexDirection: 'row', justifyContent: 'space-between'}}>
  //               <Text style={styles.text}>{e.name}</Text>
  //               <Text>{e.latest_timestamp}</Text>
  //             </View>
  //             <View style={{}}>
  //               <Text style={styles.message} numberOfLines={1}>
  //                 {e.lastChat}
  //               </Text>
  //             </View>
  //           </View>
  //         </Pressable>
  //       );
  //     })}
  //   </ScrollView>
  // );
}
const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: '600',
  },
  message: {
    fontSize: 16,
    fontWeight: '600',
  },
});
