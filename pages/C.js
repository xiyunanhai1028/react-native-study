import React from 'react';
import { View, Text } from 'react-native';
export default class C extends React.Component {
    componentDidMount() {
        console.log('C componentDidMount');
    }
    componentWillUnmount() {
        console.log('C componentDidMount');
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'red', fontSize: 20 }}>C Page</Text>
            </View>
        )
    }
}