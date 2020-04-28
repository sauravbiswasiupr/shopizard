import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { DangerZone, LinearGradient } from 'expo';

import { primaryGradientArray } from '../utils/Colors';
import SubTitle from './SubTitle';
import Header from './Header';

const { Lottie } = DangerZone;

export default class WelcomeScreen extends React.Component {
  state = {
    animation: null,
  };

  componentWillMount() {
    this._playAnimation();
  }

  render() {
    return (
      <LinearGradient colors={primaryGradientArray} style={styles.animationContainer}>
        <Header title={"Shopizard"} />
        <SubTitle style={{paddingTop: 10, fontFamily: 'customFont', fontSize: 20, color: 'white'}} 
        subtitle={"Your friend at the supermarket"} />

        {this.state.animation &&
          <Lottie
            ref={animation => {
              this.animation = animation;
            }}
            style={{
              width: 400,
              height: 400,
              alignItems: 'center',
              marginBottom: 150,
            }}
            source={this.state.animation}
          />}
      </LinearGradient>
    );
  }

  _playAnimation = () => {
    if (!this.state.animation) {
      this._loadAnimationAsync();
    } else {
      this.animation.reset();
      this.animation.play();
    }
  };

  _loadAnimationAsync = async () => {
    let result = await fetch(
      'https://assets6.lottiefiles.com/temp/lf20_QTR8Nb.json'
    )
      .then(data => {
        return data.json();
      })
      .catch(error => {
        console.error(error);
      });
    this.setState({ animation: result }, this._playAnimation);
  };
}

const styles = StyleSheet.create({
  animationContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  buttonContainer: {
    paddingTop: 20,
  },
  mainContainer: {
      flex: 1
  },
  centered: {
      alignItems: 'center'
  }
});
