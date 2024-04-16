import {View, Text, Pressable, Image} from 'react-native';
import React from 'react';

export default function BackButton({text, onPress, color}) {
  return (
    <View
      style={{
        position: 'absolute',
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        zIndex: 5,
      }}>
      <Pressable onPress={onPress} style={{padding: 10}}>
        <Image
          source={require('../../assets/images/Back.png')}
          style={{height: 10, width: 10, marginEnd: 10}}
          resizeMode="stretch"
        />
      </Pressable>
      <Text
        style={{
          fontSize: 24,
          color: color || '#000000',
          fontWeight: '300',
        }}>
        {text}
      </Text>
    </View>
  );
}
