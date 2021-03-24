
import React from 'react';
import {
    StyleSheet,
    Text,
    Button,
    View,
} from 'react-native';



/**
 * 我的
 */
export default class MyPage extends React.Component {

    render() {
        const {navigation} = this.props;
        return (<View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            
        }}>

        <View style={{backgroundColor:'gray'}}>
            <Text style={styles.showText}>我的</Text>
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