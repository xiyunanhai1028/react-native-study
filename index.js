/**
 * @format
 */

import { AppRegistry } from 'react-native';
import 'react-native-gesture-handler';
// import App from './App';
import App from './pages/navigation/App';
import FlatListDemo from './pages/FlatListDemo';
import SectionListDemo from './pages/SectionListDemo';
import IconDemo from './pages/IconDemo'
import { name as appName } from './app.json';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
const AppNavigator = createStackNavigator({
    App: {
        screen: App,
    },
    FlatListDemo: {
        screen: FlatListDemo,
    },
    SectionListDemo: {
        screen: SectionListDemo,
    },
    IconDemo: {
        screen: IconDemo,
    },
});

// AppRegistry.registerComponent(appName, () => createAppContainer(AppNavigator));
AppRegistry.registerComponent(appName, () => App);
