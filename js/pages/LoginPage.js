import React from 'react';
import {
    StyleSheet,
    Text,
    Button,
    View,
} from 'react-native';



/**
 * 登录
 */
export default class LoginPage extends React.Component {

    render() {
        const {navigation} = this.props;
        return (<View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            
        }}>

        <View style={{backgroundColor:'gray'}}>
            <Text style={styles.showText}>LoginPage</Text>
            </View>
            <Button title="登录" onPress={()=>{

                navigation.navigate("HomeBottomNavigator");
            }}/>
        </View>)
    }

}

const styles = StyleSheet.create({

    showText: {
        fontSize: 50,
        fontWeight: '600',
    },
});