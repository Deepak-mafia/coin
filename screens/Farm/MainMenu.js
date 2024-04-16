import {View, Text, Pressable, Image} from 'react-native';
import React from 'react';
import BackButton from './BackButton';
import ToggleBtn from './ToggleBtn';

export default function MainMenu({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: '#E7E6E2'}}>
      <BackButton
        text={'Main Menu'}
        onPress={() => {
          navigation.goBack();
        }}
      />

      <View
        style={{
          width: '100%',
          height: '100%',
          flexDirection: 'row',
          paddingTop: 50,
        }}>
        <View
          style={{
            width: '50%',
            height: '100%',
            padding: 10,
            alignItems: 'center',
          }}>
          <Pressable
            onPress={() => {
              navigation.navigate('MainMenuScreens', {
                screenName: 'MARKETRATES',
              });
            }}
            style={{
              width: '75%',
              height: '40%',
              marginVertical: 10,
              backgroundColor: '#fff',
              borderRadius: 50,
              padding: 10,
              paddingVertical: 25,
            }}>
            <View
              style={{
                width: 30,
                height: 20,
                borderRadius: 30,
                backgroundColor: '#000',
              }}
            />
            <Text
              style={{
                marginTop: 20,
                color: '#000',
                fontSize: 22,
                fontWeight: '500',
                textAlign: 'center',
              }}>
              Market Rate
            </Text>
          </Pressable>

          <Pressable
            onPress={() => {
              navigation.navigate('MainMenuScreens', {
                screenName: 'MARKETPLACE',
              });
            }}
            style={{
              width: '75%',
              height: '40%',
              marginVertical: 10,
              backgroundColor: '#fff',
              borderRadius: 50,
              padding: 10,
              paddingVertical: 25,
            }}>
            <View
              style={{
                width: 30,
                height: 20,
                borderRadius: 30,
                backgroundColor: '#000',
              }}
            />
            <Text
              style={{
                marginTop: 20,
                color: '#000',
                fontSize: 22,
                fontWeight: '500',
                textAlign: 'center',
              }}>
              Marketplace
            </Text>
          </Pressable>
        </View>
        <View
          style={{
            width: '50%',
            height: '100%',
            padding: 10,
            alignItems: 'center',
          }}>
          <Pressable
            onPress={() => {
              navigation.navigate('MainMenuScreens', {
                screenName: 'AI',
              });
            }}
            style={{
              width: '75%',
              height: '60%',
              marginVertical: 10,
              backgroundColor: '#fff',
              borderRadius: 50,
              padding: 10,
              paddingVertical: 25,
            }}>
            <View
              style={{
                width: 30,
                height: 20,
                borderRadius: 30,
                backgroundColor: 'gold',
                marginBottom: 20,
              }}
            />
            <Image source={require('../../assets/images/Wheat.png')} />
            <Text
              style={{
                marginTop: 20,
                color: '#000',
                fontSize: 22,
                fontWeight: '500',
                // textAlign: 'center',
              }}>
              AI in agricultue
            </Text>
          </Pressable>
        </View>
      </View>
      <ToggleBtn navigation={navigation} />
    </View>
  );
}
