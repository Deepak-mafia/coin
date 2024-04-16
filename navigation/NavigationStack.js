import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DashBorad from '../screens/DashBorad';
import chat from '../screens/HomeScreens/chat';
import Chatlog from '../screens/HomeScreens/Chatlog';
import Splash from '../screens/Farm/Splash';
import SwipeUpToUnlock from '../screens/Farm/SwipeToUnlock';
import Login from '../screens/Farm/Login';
import HomePage from '../screens/Farm/HomePage';
import ToggleBtn from '../screens/Farm/ToggleBtn';
import MainMenu from '../screens/Farm/MainMenu';
import Profile from '../screens/Farm/Profile';
import ChatwithYourExpert from '../screens/Farm/ChatwithYourExpert';
import MainMenuScreens from '../screens/Farm/MainMenuScreens';
import Settings from '../screens/Farm/Settings';

const Stack = createNativeStackNavigator();

const farm = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SwipeUpToUnlock"
        component={SwipeUpToUnlock}
        options={{title: 'Overview', headerShown: false}}
      />
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{title: 'Overview', headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{title: 'Overview', headerShown: false}}
      />
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{title: 'Overview', headerShown: false}}
      />
      <Stack.Screen
        name="ToggleBtn"
        component={ToggleBtn}
        options={{title: 'Overview', headerShown: false}}
      />
      <Stack.Screen
        name="MainMenu"
        component={MainMenu}
        options={{title: 'Overview', headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{title: 'Overview', headerShown: false}}
      />
      <Stack.Screen
        name="ChatwithYourExpert"
        component={ChatwithYourExpert}
        options={{title: 'Overview', headerShown: false}}
      />
      <Stack.Screen
        name="MainMenuScreens"
        component={MainMenuScreens}
        options={{title: 'Overview', headerShown: false}}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{title: 'Overview', headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DashBorad"
        component={DashBorad}
        options={{title: 'Overview', headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const ChatStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Chat"
        component={chat}
        options={{title: 'Overview', headerShown: false}}
      />
      <Stack.Screen
        name="Chatlog"
        component={Chatlog}
        options={{title: 'Overview', headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export {MainStack, ChatStack, farm};
