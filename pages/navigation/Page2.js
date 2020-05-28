import React from 'react';
import { View, Button, Text } from 'react-native';
export default class Page2 extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
                <Text style={{ marginBottom: 10 }}>Page 2</Text>
                <Button title='go back' onPress={() => this.props.navigation.goBack()} />
            </View>
        )
    }
}