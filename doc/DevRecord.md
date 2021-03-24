## 2020-12-02

开始模仿编写自己的Github客户端，采用React Native实现，Android与IOS两端。

完成项：

1. 初始化项目，并引入Git管理
执行操作：npx init  iGitHubRn

## 2020-12-03
### 完成项：

#### 1. 引入矢量图标   npm install --save react-native-vector-icons
    
    a. 设置Android工程支持矢量图
    b. 设置IOS工程支持矢量图
#### 2. 引入React Navigation   
    
    版本5.x
    1. npm install @react-navigation/native

    2. 引入依赖 
    npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

    3. mac os 特殊配置  on a Mac and developing for iOS, you need to install the pods 
    npx pod-install ios



## 2020-12-03
   
    1. 引入栈导航
    npm install @react-navigation/stack
    
    2. 引入底部导航
    npm install @react-navigation/bottom-tabs

## 2020-12-04

    1. 完成底部导航的动态更新
    底部导航的子页面是采用懒加载机制
    2. 引入材料底部导航
    npm install @react-navigation/material-bottom-tabs react-native-paper
    3. 完成redux 状态管理的引入
    npm install redux 

## 2020-12-08
    1. 引入缓存网络框架的引入
    2. 在IOS模拟器上进行debug调试
        cmd + d 调出调试菜单



## 2020-12-21
    1. 引入redux同步支持，redux异步支持
    npm install react-redux
    npm install redux-thunk
    2. 动态的修改bottom tab bar的颜色

## 2020-12-23
    1. 添加顶部Tab导航的支持
    npm install @react-navigation/material-top-tabs react-native-tab-view
    2. 根据一个tabs名字数组，动态的生成顶部导航
    3. 添加PopularTab子页面的异步redux支持，获取网络数据，并展示在页面
    4. 使用FlatList 展示列表
## 2020-12-24
    1. 构建PopularTabPage页面中FlatList PopularItem组件
    2. 应用SafeAreView控件，适配iphone x等手机的刘海屏
    3. 运行应用于Android，设备，确保添加代码在Android上无错误

## 2021-01-06
    1. 为最热模块添加上拉加载更多
    2. 修正底部控件展示错位问题


## 2021-01-22
    1. 自定义导航栏  
    npm add prop-types
    2. 
    