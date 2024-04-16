import {View, Text, ImageBackground, Pressable, TextInput} from 'react-native';
import React, {useState} from 'react';
import ContinueBtn from './ContinueBtn';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassWord] = useState('');

  return (
    <View>
      <ImageBackground
        style={{
          height: '100%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
        source={require('../../assets/images/Login.png')}>
        <Text style={{fontSize: 20, fontWeight: '500', color: '#fff'}}>
          CropSense
        </Text>
        <View style={{width: '80%'}}>
          <TextInput
            style={{
              width: '100%',
              backgroundColor: '#fff',
              borderRadius: 12,
              paddingHorizontal: 15,
              marginBottom: 15,
              color: '#000',
            }}
            onChangeText={e => setEmail(e)}
            placeholder="Enter your name"
            placeholderTextColor="gray"
            value={email}
          />
          <TextInput
            style={{
              width: '100%',
              backgroundColor: '#fff',
              borderRadius: 12,
              paddingHorizontal: 15,
              color: '#000',
            }}
            onChangeText={e => setPassWord(e)}
            placeholder="Password"
            placeholderTextColor="gray"
            value={password}
          />
        </View>
        <View>
          <ContinueBtn
            text={'Login'}
            onPress={() => navigation.navigate('HomePage')}
          />
          <Text style={{fontSize: 20, fontWeight: '500', color: '#fff'}}>
            I don’t have an account
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}
