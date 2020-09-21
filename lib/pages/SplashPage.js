import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Alert,
  Dimensions, TouchableOpacity
} from 'react-native';

class SplashPage extends Component {

  static navigationOptions = {
    header: null,  //隐藏顶部导航栏
  };

  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }

  componentDidMount() {

    this.timer = setTimeout(
      () => { this.props.navigation.navigate('Login'); },
      1000       //延时时间
    );

  }

  render() {
    return (
      <View style={styles.body}>

        <Image
          style={styles.imageSplash}
          source={require('../../images/splash_background_image.png')}
        />

        <TouchableOpacity style={styles.btnJump} title={"11111"} onPress={() => {

          // Alert.alert("点击收到！");
        }} ><Text>Press Here</Text></TouchableOpacity>

      </View>
    );
  };
}
const win = Dimensions.get('window');
const styles = StyleSheet.create({

  body: {
    backgroundColor: "white",
  },

  btnJump: {
    alignItems: "center",
    position: 'absolute',
    right: 10,
    padding: 10,
    top: 10,
    backgroundColor: "#1E90FF",
  },
  imageSplash: {
    height: win.height,
    width: win.width,
    resizeMode: "contain",
    backgroundColor: "white",
  }

});

export default SplashPage;
