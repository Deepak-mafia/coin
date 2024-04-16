import {View, Text, Image, TextInput} from 'react-native';
import React, {useState} from 'react';
import BackButton from './BackButton';

export default function ChatwithYourExpert({navigation}) {
  const [chat, setChat] = useState('');
  return (
    <View style={{flex: 1, padding: 10}}>
      <BackButton
        onPress={() => {
          navigation.goBack();
        }}
        color={'#000'}
        text={'Chat with Your Expert'}
      />
      <View
        style={{
          justifyContent: 'space-between',
          width: '100%',
          height: '100%',
        }}>
        <View
          style={{
            marginTop: 50,
            width: '100%',
            height: 100,
            alignItems: 'center',
            justifyContent: 'space-around',
            flexDirection: 'row',
          }}>
          <Image
            style={{height: 70, width: '15%'}}
            resizeMode="contain"
            source={require('../../assets/images/Expert.png')}
          />
          <Text
            style={{
              fontSize: 14,

              width: '75%',
              backgroundColor: '#fff',
              padding: 10,
              color: '#000',
              borderRadius: 16,
              // height: 70,
              // alignSelf: 'center',
              // justifyContent: 'center',
            }}>
            Hey Ashwin! This is your crop expert. How may I help you?
          </Text>
        </View>

        <View
          style={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            padding: 5,
            borderRadius: 16,
            backgroundColor: '#fff',
          }}>
          <TextInput
            value={chat}
            placeholder="Type here "
            placeholderTextColor="gray"
            style={{width: '55%', color: '#000'}}
            onChangeText={e => {
              setChat(e);
            }}
          />
          <Image
            style={{height: 30, width: '10%'}}
            resizeMode="contain"
            source={require('../../assets/images/Share.png')}
          />
          <Text
            style={{
              backgroundColor: 'green',
              fontSize: 20,
              padding: 10,
              borderRadius: 12,

              color: '#fff',
              textAlign: 'center',
              width: '30%',
            }}>
            Send
          </Text>
        </View>
      </View>
      <View
        style={{
          zIndex: -1,
          position: 'absolute',
          height: 585,
          width: 585,
          top: -200,
          left: -300,
          borderRadius: 500,
          borderWidth: 1,
          borderColor: 'green',
        }}></View>
      <View
        style={{
          zIndex: -1,
          position: 'absolute',
          height: 585,
          width: 585,
          top: -250,
          left: -200,
          borderRadius: 500,
          borderWidth: 1,
          borderColor: 'green',
        }}></View>
    </View>
  );
}
