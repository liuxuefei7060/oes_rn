import React, { Component } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import global from "../common/Global"


const styles = StyleSheet.create({
    divide: {
        height: 1,
        backgroundColor: "#CCC",
        marginTop: 6,
        width: global.gScreen.screenWidth
    },
});

export default function DivideLine() {

    return (<View style={styles.divide} />);

}