import {View, Text} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';
import {color, fontWeight} from '../assets/appTheam';

export default function TextComp({text, size}) {
  return (
    <View>
      <Text
        style={{
          color: color.black,
          fontSize: size ? size : scale(18),
          fontWeight: fontWeight.semi,
        }}>
        {text}
      </Text>
    </View>
  );
}
