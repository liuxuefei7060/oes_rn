## 2021-03-23

采用React Native编写医掌宝


##### 1. 初始化项目，并引入Git管理
    步骤：
    执行操作：npx react-native init  oes_rn
    
    执行遇到的问题：
    
    问题：
    
    Failed to install CocoaPods dependencies for iOS project, which is required by this template.
    Please try again manually: "cd ./oes_rn/ios && pod install".
    
    解决： cd ./oes_rn/ios && pod install

    问题：
    React` requires CocoaPods version `>= 1.10.1`, which is not satisfied by your current version, `1.9.3`.
    解决：
    更新
    brew update cocoapods 
##### 2. 引入矢量图标   npm install --save react-native-vector-icons
    步骤：
    a. 设置Android工程支持矢量图
    在android/app目录下的build.gradle添加
    apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
    b. 设置IOS工程支持矢量图
    在ios/oes_rn/Info.plist文件中添加
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
##### 3. 引入React Navigation   

        版本5.x
    1. npm install @react-navigation/native

    2. 引入依赖 
    npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

    3. mac os 特殊配置  on a Mac and developing for iOS, you need to install the pods 
    npx pod-install ios

## 2021-03-24

