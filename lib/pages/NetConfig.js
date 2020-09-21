import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Alert,
  TextInput,
  TouchableOpacity, Button
} from 'react-native';
import global from "../common/Global"
import { Divide } from "../common/DividerLine"


export default function NetConfig() {

  return (<View style={{ flex: 1, backgroundColor: 'white' }}>

    <View style={styles.inputWarp}>
      <Text style={{ width: 60 }}>域名协议</Text>
      <TextInput style={styles.textInput} placeholder="请输入协议"></TextInput>
    </View>

    <View style={styles.divide} />

    <View style={styles.inputWarp}>
      <Text style={{ width: 60 }}>IP地址</Text>
      <TextInput style={styles.textInput} placeholder="请输入IP地址"></TextInput>
    </View>

    <View style={styles.divide} />


    <View style={styles.inputWarp}>
      <Text style={{ width: 60 }}>端口号</Text>
      <TextInput style={styles.textInput} placeholder="请输端口号"></TextInput>
    </View>

    <View style={styles.divide} />

    <View style={styles.inputWarp}>
      <Text style={{ width: 60 }}>路径</Text>
      <TextInput style={styles.textInput} placeholder="请输路径"></TextInput>
    </View>

    <View style={styles.divide} />


  </View>);

}


const styles = StyleSheet.create({

  body: {
    backgroundColor: "white",
  },

  divide: {
    height: 1,
    backgroundColor: "#CCC",
    marginTop: 6,
    width: global.gScreen.screenWidth
  },
  inputWarp: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
    alignItems: "center",
    flexDirection: "row"
  },

  textInput: {
    backgroundColor: "#CCC",
    justifyContent: 'center',
    flex: 1,
    marginLeft: 20,
    paddingLeft: 16,
    paddingRight: 16,
    alignItems: 'center',

  }
});
