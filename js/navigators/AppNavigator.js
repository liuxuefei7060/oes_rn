import * as React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from '../pages/LoginPage';
import HomeBottomNavigator from './HomeBottomNavigator';

// import Icon from 'react-native-vector-icons/FontAwesome';
const Stack = createStackNavigator();

function AppNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="LoginPage" component={LoginPage} options={{ title: '登录' }}/>
            <Stack.Screen name="HomeBottomNavigator" component={HomeBottomNavigator} />
        </Stack.Navigator>
    );
}


export default AppNavigator;