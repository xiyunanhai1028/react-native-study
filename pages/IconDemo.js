import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
export default class IconDemo extends React.Component {
    render() {
        return (
            <View>
                <Text>矢量图</Text>
                <Icon size={50} name='pluscircle' color='red' />
                <Icon.Button size={50} name='pluscircle' color='red' />
            </View>
        )
    }
}