import React from 'react';
import { SectionList, View, Text, StyleSheet, RefreshControl, ActivityIndicator } from 'react-native';
export default class SectionListDemo extends React.Component {
    state = {
        data: [
            { title: '一线城市', data: ['北京', '上海', '广东'] },
            { title: '二线城市', data: ['杭州', '西安', '天京'] },
            { title: '三线城市', data: ['南京', '武汉', '湖南', '深圳'] }],
        refreshing: false
    }
    _renderItem = ({ item, index }) => {
        return <Text key={index} style={styles.item}>{item}</Text>
    }
    _renderSectionHeader = (title) => {
        return <Text style={styles.header}>{title}</Text>
    }
    _onRefresh = () => {
        this.setState({ refreshing: true });
        setTimeout(() => {
            let data = []
            for (let i = this.state.data.length - 1; i >= 0; i--) {
                data.push(this.state.data[i])
            }
            this.setState({
                refreshing: false,
                data
            })
        }, 2000);
    }
    getActivityIndicator = () => {
        return <View>
            <ActivityIndicator size='large' color='#0000ff' />
            <Text style={{ textAlign: 'center' }}>正在刷新...</Text>
        </View>
    }
    _loadMoreData = () => {
        const data = this.state.data;
        const moreData = data.concat(data)
        this.setState({
            data: moreData
        })
    }
    render() {
        const { data, refreshing } = this.state
        console.log(data);
        return (
            <SectionList
                sections={data}
                renderItem={data => this._renderItem(data)}
                renderSectionHeader={({ section: { title } }) => this._renderSectionHeader(title)}
                ItemSeparatorComponent={
                    () => <View style={styles.line} />
                }
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={this._onRefresh} />
                }
                onEndReached={this._loadMoreData}
                ListFooterComponent={this.getActivityIndicator}

            />
        )
    }
}

const styles = StyleSheet.create({
    item: {
        height: 80,
        backgroundColor: 'blue',
        textAlign: 'center',
        lineHeight: 80,
        fontSize: 30
    },
    line: {
        height: 1,
        backgroundColor: 'gray'
    },
    header: {
        height: 30,
        backgroundColor: 'yellow',
        fontSize: 20
    }
})