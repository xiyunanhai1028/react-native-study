import React from 'react';
import { View, Button, Text } from 'react-native';
export default class HomePage extends React.Component {
    static navigationOptions = {
        title: 'home',//设置当前页面的标题
        headerBackTitle: '返回上一层'//ios上显示返回按钮后面的提示字
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
                <Text >Home Page</Text>
                <Button style={{ marginTop: 10 }} title='to page1' onPress={() => this.props.navigation.navigate('Page1')} />
                <Button style={{ marginTop: 10 }} title='to page2' onPress={() => this.props.navigation.navigate('Page2')} />
                <Button style={{ marginTop: 10 }} title='to page3' onPress={() => this.props.navigation.navigate('Page3')} />
            </View>
        )
    }
}