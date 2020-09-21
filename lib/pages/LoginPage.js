import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Alert,
  TextInput,
  Dimensions, TouchableOpacity, Button
} from 'react-native';
import Toast from 'react-native-root-toast';
import global from "../common/Global"


class LoginPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      pwd: ''
    };
  }

  componentDidMount() {
    console.log("componentDidMount()");
    console.log(global.gScreen.screenHeight);
    // fetch('https://reactnative.dev/movies.json')
    //   .then((response) => response.json())
    //   .then((json) => {
    //     console.log(json);
    //     // Toast.show("请求成功");
    //     this.setState({ data: json.movies });
    //   })
    //   .catch((error) => console.error(error))
    //   .finally(() => {
    //     this.setState({ isLoading: false });
    //   });
    // this.login();
  }


  login() {

    console.log(this.state.name);
    console.log(this.state.pwd);
    if (this.state.name === null || this.state.name === '') {
      Toast.show("请输入用户名");
      return;
    }
    if (this.state.pwd === null || this.state.pwd === '') {
      Toast.show("请输入密码");
      return;
    }

    fetch('http://220.168.26.57:2012/webservices/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'account=1710&password=zz@123456&loginType=0&clientId=cf0f095269727a58'
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        Toast.show("请求成功");
        this.props.navigation.navigate("Main");
        this.setState({ data: json.movies });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }


  render() {
    // const [text, setText] = this.props.useState('');
    return (
      <View style={styles.body}>
        <View style={styles.inputNameWarp}>
          <TextInput
            style={styles.textInputName}
            placeholder="请输入用户名"
            onChangeText={(name) => this.setState({ name })}
            value={this.state.name}
          />
        </View>
        <View style={styles.inputPwdWarp}>
          <TextInput
            style={styles.textInputPwd}
            placeholder="请输入密码"
            onChangeText={(pwd) => this.setState({ pwd })}
            value={this.state.pwd}
          />
        </View>


        <TouchableOpacity style={styles.btnLogin}
          activeOpacity={0.7} onPress={() => {
            console.log("name: " + this.state.name);
            this.login();
            // this.props.navigation.navigate('Main');
          }} ><Text style={{ color: "white" }}>立即登录</Text></TouchableOpacity>



        <TouchableOpacity style={styles.btnNetConfig}
          activeOpacity={0.7} onPress={() => {
            this.props.navigation.navigate('NetConfig');
          }} ><Text style={{ color: "deepskyblue" }}>网络配置</Text></TouchableOpacity>

      </View>
    );
  }

}
const styles = StyleSheet.create({

  body: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: 'center',
    alignItems: 'center'
  },

  inputNameWarp: {
    marginLeft: 30,
    marginRight: 30,
    flexDirection: "row"
  },

  inputPwdWarp: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    flexDirection: "row"
  },

  textInputName: {
    backgroundColor: "#EEEEEE",
    justifyContent: 'center',
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    alignItems: 'center',

  },

  textInputPwd: {
    backgroundColor: "#EEEEEE",
    justifyContent: 'center',
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    alignItems: 'center',
  },

  btnLogin: {
    justifyContent: 'center',
    marginLeft: 16,
    backgroundColor: "deepskyblue",
    marginRight: 16,
    marginTop: 30,
    padding: 12,
    width: 150,
    alignItems: 'center',
  },
  btnNetConfig: {
    position: "absolute",
    bottom: 20,
    padding: 12,
  },
});

export default LoginPage;