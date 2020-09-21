import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './pages/SplashPage';
import Login from './pages/LoginPage';
import Main from './pages/main/MainPage';
import { RootSiblingParent } from 'react-native-root-siblings';
import NetConfig from './pages/NetConfig';

const Stack = createStackNavigator();
function App() {
  return (
    <RootSiblingParent>
      <NavigationContainer initialRouteName="Splash">
        <Stack.Navigator>
          <Stack.Screen name="Splash"
            component={Splash}
            options={{ headerShown: false }} />
          <Stack.Screen
            name="Main"
            component={Main} />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }} />
          <Stack.Screen
            name="NetConfig"
            options={{
              title: "网络配置",
            }
            }
            component={NetConfig} />
        </Stack.Navigator>
      </NavigationContainer>
    </RootSiblingParent>
  );
}

export default App;