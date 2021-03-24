
import React from 'react';
import {
    StyleSheet,
    Text,
    Button,
    View,
} from 'react-native';



/**
 * 首页
 */
export default class MainPage extends React.Component {

    render() {
        const {navigation} = this.props;
        return (<View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            
        }}>

        <View style={{backgroundColor:'gray'}}>
            <Text style={styles.showText}>首页</Text>
            </View>
        </View>)
    }

}

const styles = StyleSheet.create({

    showText: {
        fontSize: 50,
        fontWeight: '600',
    },
});