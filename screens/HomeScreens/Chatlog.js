import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

export default function Chatlog({route, navigation}) {
  console.log(route.params.data[0].chatlog);
  const data = route.params.data[0];
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'gray',
        }}>
        <View style={{flexDirection: 'row'}}>
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}
            style={{
              width: '20%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <AntDesign name="arrowleft" size={22} color="black" />
          </Pressable>
          <View
            style={{
              width: 45,
              height: 45,
              borderRadius: 50,
            }}>
            <Image
              source={{uri: data.picture}}
              style={{width: '100%', height: '100%', borderRadius: 50}}
            />
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 20,
            }}>
            <Text style={styles.text}>{data.name}</Text>
          </View>
        </View>
        <View>
          <Entypo name="dots-three-vertical" size={22} color="black" />
        </View>
      </View>
      <ScrollView>
        {data.chatlog.length === 0 ? (
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={styles.text}>{'No Message to show'}</Text>
            <Text style={styles.text}>{'Type to start one'}</Text>
          </View>
        ) : (
          data.chatlog.map(e => {
            return (
              <View
                style={{
                  width: '100%',
                  marginHorizontal: 2,
                  marginVertical: 2,
                  alignItems: e.side == 'left' ? 'flex-start' : 'flex-end',
                  // borderColor: 'red',
                  // borderWidth: 2,
                }}>
                <View
                  style={{
                    padding: 5,
                    borderRadius: 10,
                    maxWidth: '90%',
                    backgroundColor: e.side == 'left' ? 'gray' : 'green',
                  }}>
                  <Text style={styles.text}>{e.text}</Text>
                </View>
              </View>
            );
          })
        )}
      </ScrollView>
      <View style={{backgroundColor: '#1c1c1c'}}>
        <TextInput placeholder="enter" placeholderTextColor={'gray'} />
      </View>
    </View>
  );
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
