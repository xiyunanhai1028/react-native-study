import React from 'react';
import { View, Text } from 'react-native';
export default class A extends React.Component {
    componentDidMount() {
        console.log('A componentDidMount');
    }
    componentWillUnmount() {
        console.log('A componentDidMount');
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'red', fontSize: 20 }}
                    onPress={() => this.props.navigation.navigate('B')}>A Page</Text>
            </View>
        )
    }
}