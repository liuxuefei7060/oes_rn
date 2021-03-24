import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';



/**
 * 登录
 */
export default class LoginPage extends React.Component {

    render() {
        return (<View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        }}>

            <Text style={styles.showText}>LoginPage</Text>
        </View>)
    }

}

const styles = StyleSheet.create({

    showText: {
        fontSize: 50,
        ontWeight: '600',
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});