import {View, Text, ImageBackground, Image} from 'react-native';
import React from 'react';
import BackButton from './BackButton';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Settings({navigation}) {
  return (
    <View style={{height: '100%', width: '100%'}}>
      <ImageBackground
        style={{height: '100%', width: '100%'}}
        source={require('../../assets/images/Settings.png')}>
        <BackButton
          text={'Settings'}
          color={'#fff'}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <View style={{marginTop: 50, padding: 20}}>
          <Text style={{color: '#000', fontSize: 18, fontWeight: '500'}}>
            Language
          </Text>
          <View
            style={{
              width: 100,
              backgroundColor: '#fff',
              justifyContent: 'space-between',
              flexDirection: 'row',
              borderRadius: 10,
              padding: 5,
              marginBottom: 20,
            }}>
            <Text style={{color: 'green', fontSize: 12}}>English</Text>
            <AntDesign name="down" size={12} color="black" />
          </View>
          <Text
            style={{
              color: '#000',
              fontSize: 18,
              fontWeight: '500',
              marginBottom: 20,
            }}>
            Dark mode
          </Text>
          <Image source={require('../../assets/images/Switch.png')} />
          <View
            style={{
              width: 100,
              justifyContent: 'space-between',
              flexDirection: 'row',
              padding: 5,
              marginBottom: 20,
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#000',
                fontSize: 18,
                fontWeight: '500',
                textAlign: 'center',
              }}>
              Notification
            </Text>
            <AntDesign name="right" size={12} color="green" />
          </View>
          <Text
            style={{
              color: '#000',
              fontSize: 18,
              fontWeight: '500',
              marginBottom: 20,
            }}>
            SI Unit
          </Text>
          <Image
            style={{width: 50}}
            source={require('../../assets/images/Switch.png')}
          />
          <View
            style={{
              width: 50,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{color: '#000'}}>°C</Text>
            <Text style={{color: '#000'}}>°F</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
