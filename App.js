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
  Text
} from 'react-native';


class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}
          onPress={() => this.props.navigation.navigate('FlatListDemo')}>To FlatListDemo</Text>
        <Text style={styles.text}
          onPress={() => this.props.navigation.navigate('SectionListDemo')}>To SectionListDemo</Text>
        <Text style={styles.text}
          onPress={() => this.props.navigation.navigate('IconDemo')}>To IconDemo</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'blue',
    fontSize: 18
  }
});

export default App;
