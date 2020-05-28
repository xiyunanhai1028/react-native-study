import React from 'react';
import { View, Text } from 'react-native';
export default class B extends React.Component {
    componentDidMount() {
        console.log('B componentDidMount');
    }
    componentWillUnmount() {
        console.log('B componentDidMount');
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'red', fontSize: 20 }}
                    onPress={() => this.props.navigation.navigate('C')}>B Page</Text>
            </View>
        )
    }
}