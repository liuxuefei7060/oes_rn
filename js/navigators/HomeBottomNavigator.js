import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MainPage from '../pages/MainPage'
import HospitalPage from '../pages/HospitalPage'
import MyPage from '../pages/MyPage'
import { HeaderTitle } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();

/**
 * 主页
 */
export default class HomeBottomNavigator extends React.Component {

    render() {
        return (<Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'MainPage') {
                        iconName = 'ios-information-circle';
                    } else if (route.name === 'HospitalPage') {
                        iconName = 'ios-list';
                    } else if (route.name === 'MyPage') {
                        iconName = 'ios-list';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}

            tabBarOptions={{
                activeTintColor: 'blue',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="MainPage" component={MainPage} options={{ title: "首页" }} />
            <Tab.Screen name="HospitalPage" component={HospitalPage} options={{ title: "医院" }} />
            <Tab.Screen name="MyPage" component={MyPage} options={{ title: "我的" }} />
        </Tab.Navigator>)
    }

}

const styles = StyleSheet.create({

    showText: {
        fontSize: 50,
        fontWeight: '600',
    },
});