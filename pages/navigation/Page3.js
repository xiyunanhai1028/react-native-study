import React from 'react';
import { View, Button, Text, TextInput } from 'react-native';
export default class Page3 extends React.Component {
    render() {
        const { navigation: { state: { params }, setParams } } = this.props
        const showText = params && params.mode === 'edit' ? '正在编辑' : '编辑完成'
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
                <Text style={{ marginBottom: 10 }}>Home Page3</Text>
                <Text style={{ marginBottom: 10 }}>{showText}</Text>
                <TextInput onChangeText={txt => setParams({ name: txt })}
                    style={{
                        height: 45,
                        borderWidth: 1,
                        borderColor: 'gray',
                        borderRadius: 4,
                        width: 300
                    }} />
                <Button title='go back' onPress={() => navigation.goBack()} />
            </View>
        )
    }
}