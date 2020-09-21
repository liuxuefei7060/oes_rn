import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomePage from './HomePage';
import HospitalPage from './HospitalPage';
import UserPage from './UserPage';

const Tab = createBottomTabNavigator();

export default function MainPage() {
    return (

        <Tab.Navigator
            screenOptions={
                ({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused
                                ? 'ios-information-circle'
                                : 'ios-information-circle-outline';
                        } else if (route.name === 'HospitalPage') {
                            iconName = focused ? 'ios-list' : 'ios-list';
                        } else if (route.name === 'UserPage') {
                            iconName = focused ? 'ios-list' : 'ios-list';
                        }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}>
            <Tab.Screen name="Home" component={HomePage} />
            <Tab.Screen name="HospitalPage" component={HospitalPage} />
            <Tab.Screen name="UserPage" component={UserPage} />
        </Tab.Navigator>

    );
}