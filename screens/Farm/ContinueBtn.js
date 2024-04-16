import {View, Text, Pressable} from 'react-native';
import React from 'react';

export default function ContinueBtn({onPress, text}) {
  return (
    <View>
      <Pressable
        onPress={onPress}
        style={{
          height: 50,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'black',
          borderRadius: 12,
          marginBottom: 10,
          //   shadowColor: '#171717',
          //   shadowOffset: {width: -2, height: 4},
          //   shadowOpacity: 0.2,
          //   shadowRadius: 3,
        }}>
        <Text style={{fontSize: 20, fontWeight: '500', color: '#fff'}}>
          {text}
        </Text>
      </Pressable>
    </View>
  );
}
