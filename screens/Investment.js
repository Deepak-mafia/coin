import {View, Text, TouchableHighlight, TouchableOpacity} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import InvestmentNavigator from './InvestmentScreens/InvestmentNavigator';

export default function Investment() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="InvestmentNavigator"
        component={InvestmentNavigator}
        options={{title: 'Overview', headerShown: false}}
      />
      {/* <Stack.Screen
        name="Chatlog"
        component={Chatlog}
        options={{title: 'Overview', headerShown: false}}
      /> */}
    </Stack.Navigator>
  );
}
