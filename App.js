import React from 'react';
import { AppLoading, Font } from 'expo';

import AppContainer from './app/components/screens/TaskFiller';
import WelcomeScreen from './app/components/WelcomeScreen';

class App extends React.Component {
  state = {
    fontLoaded: false,
    screen: WelcomeScreen
  }

  componentWillMount() {
    this._loadFonts();
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        screen: AppContainer
      });
    }, 3000);
  }

  _loadFonts = async () => {
    await Font.loadAsync({
      'customFont': require('./assets/fonts/grocery.ttf')
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    if (!this.state.fontLoaded) {
      return <AppLoading />;
    }
    return <this.state.screen />;
  }
}

export default App;
