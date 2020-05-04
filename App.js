import React, {Component} from 'react';
import {AppLoading} from 'expo';

import WelcomeScreen from './app/components/WelcomeScreen';
import SettingsScreen from './app/components/screens/SettingsScreen';
import TaskFiller from "./app/components/screens/TaskFiller";

import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Main from './app/Main';

const TabNavigator = createBottomTabNavigator({
  Home: Main,
  Settings: SettingsScreen,
});

const AppContainer = createAppContainer(TabNavigator);
export default class App extends Component {
  state = {
    splashScreenLoaded: false,
    screen: WelcomeScreen
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        screen: AppContainer,
        splashScreenLoaded: true
      });
    }, 3000);
  }

  render() {
    return <this.state.screen />;
  }
}
