import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import AppNavigator from "./navigators/AppNavigator"


const App: () => React$Node = () => {


  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};


export default App;
