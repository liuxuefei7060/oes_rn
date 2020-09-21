import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');


global.gScreen = {
    screenWidth: width,
    screenHeight: height,
}

/**
 * 全部配置变量
 * schme:协议
 * host:主机，可以是ip或者域名
 * port:端口号
 * path:路径
 */
global.config = {
    scheme: 'http',
    host: '',
    port: '',
    path: ''
}


export default global;