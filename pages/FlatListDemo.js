/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    Text,
    RefreshControl,
    ActivityIndicator
} from 'react-native';


class FlatListDemo extends React.Component {
    state = {
        data: ['北京', '上海', '广东', '杭州', '西安', '天京', '南京', '武汉', '湖南', '深圳'],
        refreshing: false
    }
    _renderItem = (item, index) => {
        return <Text style={styles.item} keys={index}>{item}</Text>
    }
    _onRefresh = () => {
        this.setState({ refreshing: true });
        let data = [];
        setTimeout(() => {
            for (let i = this.state.data.length - 1; i >= 0; i--) {
                data.push(this.state.data[i])
            }
            this.setState({
                data,
                refreshing: false
            })
        }, 2000)

    }
    _loadMoreData = () => {
        const data = this.state.data;
        let moreData = data.concat(data);
        console.log(moreData);
        this.setState({
            data: moreData
        })
    }
    getIndicator = () => {
        return <View>
            <ActivityIndicator
                size='large'
                color='red'
                animating={true}
            />
            <Text style={{ textAlign: 'center', margin: 10 }}>正在加载中...</Text>
        </View>
    }

    render() {
        const { data, refreshing } = this.state
        return (
            <View style={styles.container}>
                <FlatList
                    data={data}
                    renderItem={({ item, index }) => this._renderItem(item, index)}
                    // refreshing={refreshing}
                    // onRefresh={this._onRefresh}
                    refreshControl={
                        <RefreshControl
                            title='正在加载中...'
                            tintColor='red'
                            colors={['red', 'green', 'blue']}
                            refreshing={refreshing}
                            onRefresh={this._onRefresh} />
                    }
                    ListFooterComponent={this.getIndicator}
                    onEndReached={
                        this._loadMoreData
                    }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        height: 300,
        backgroundColor: 'blue',
        fontSize: 30,
        textAlign: 'center',
        lineHeight: 300,
        margin: 10
    }
});

export default FlatListDemo;
