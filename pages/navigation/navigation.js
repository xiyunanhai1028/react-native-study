import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import HomePage from './HomePage';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import { Button } from 'react-native';
export default createStackNavigator({
    HomePage: {
        screen: HomePage
    },
    Page1: {
        screen: Page1
    },
    Page2: {
        screen: Page2,
        navigationOptions: {
            header: null//控制不显示头部
        }
    },
    Page3: {
        screen: Page3,
        navigationOptions: (props) => {
            const { navigation } = props;
            const { state, setParams } = navigation
            const { params = {} } = state
            return {
                title: params.name ? params.name : 'this is Page3',
                headerRight: (
                    <Button title={params.mode === 'edit' ? '保存' : '编辑'}
                        onPress={() => {
                            setParams({ mode: params.mode === 'edit' ? '' : 'edit' })
                        }}
                    />
                )
            }
        }
    },
}, {
    defaultNavigationOptions: {//全局默认属性，当前路由器所有页面有效
        // title: null
    }
})