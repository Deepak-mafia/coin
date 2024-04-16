import {View, Text} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function IconComp({name, from, size, color}) {
  return (
    <>
      <from name={name} size={size} color={color} />

      {/* {from === 'Feather' && <Feather name={name} size={size} color={color} />}
      {from === 'AntDesign' && (
        <AntDesign name={name} size={size} color={color} />
      )}
      {from === 'Entypo' && <Entypo name={name} size={size} color={color} />}
      {from === 'EvilIcons' && (
        <EvilIcons name={name} size={size} color={color} />
      )}
      {from === 'FontAwesome' && (
        <FontAwesome name={name} size={size} color={color} />
      )}
      {from === 'FontAwesome5' && (
        <FontAwesome5 name={name} size={size} color={color} />
      )}
      {from === 'FontAwesome6' && (
        <FontAwesome6 name={name} size={size} color={color} />
      )}
      {from === 'Ionicons' && (
        <Ionicons name={name} size={size} color={color} />
      )} */}
    </>
  );
}
