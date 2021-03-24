## 2021-03-23

采用React Native技术实现OES项目

完成项：

1. 初始化项目
    执行操作：npx react-native init  oes_rn --version 0.63.4   当前最新版本为0.64 ，但是依赖库支持还不好，安装react navigation的时候会出错。暂时不升级。
    
    问题：
    运行ios工程，出现‘event2/event-config.h‘ file not found错误。
    解决：Podfile文件中 use_flipper!  修改为 use_flipper!({ 'Flipper-Folly' => '2.3.0' })，然后执行pod install 
## 2021-03-24

#### 1. 引入矢量图标   npm install --save react-native-vector-icons
    
    a. 设置Android工程支持矢量图
    android/app/build.gradle文件添加如下配置：
    apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"

    b. 设置IOS工程支持矢量图
    在ios/oes_rn/Info.list中添加如下配置：

    <key>UIAppFonts</key>
    <array>
    <string>AntDesign.ttf</string>
    <string>Entypo.ttf</string>
    <string>EvilIcons.ttf</string>
    <string>Feather.ttf</string>
    <string>FontAwesome.ttf</string>
    <string>FontAwesome5_Brands.ttf</string>
    <string>FontAwesome5_Regular.ttf</string>
    <string>FontAwesome5_Solid.ttf</string>
    <string>Foundation.ttf</string>
    <string>Ionicons.ttf</string>
    <string>MaterialIcons.ttf</string>
    <string>MaterialCommunityIcons.ttf</string>
    <string>SimpleLineIcons.ttf</string>
    <string>Octicons.ttf</string>
    <string>Zocial.ttf</string>
    <string>Fontisto.ttf</string>
    </array>
#### 2. 引入React Navigation   
    
    版本5.x
    1. npm install @react-navigation/native

    2. 引入依赖 
    npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

    3. mac os 特殊配置  on a Mac and developing for iOS, you need to install the pods 
    npx pod-install ios


   
    1. 引入栈导航
    npm install @react-navigation/stack
    
    2. 引入底部导航
    npm install @react-navigation/bottom-tabs

