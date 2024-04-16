import Chatlog from './HomeScreens/Chatlog';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeNavigator from './HomeScreens/HomeNavigator';

const Stack = createNativeStackNavigator();

export default function Home() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeNavigator"
        component={HomeNavigator}
        options={{title: 'Overview', headerShown: false}}
      />
      <Stack.Screen
        name="Chatlog"
        component={Chatlog}
        options={{title: 'Overview', headerShown: false}}
      />
    </Stack.Navigator>
  );
}
