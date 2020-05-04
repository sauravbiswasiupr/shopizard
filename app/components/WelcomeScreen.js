import React, {Component} from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AnimationView from "./AnimationView";

import { primaryGradientArray } from '../utils/Colors';
import SubTitle from './SubTitle';
import Header from './Header';


export default class WelcomeScreen extends Component {
  state = {
    animation: null,
  };

  render = () => {
    return (
      <LinearGradient colors={primaryGradientArray} style={styles.animationContainer}>
        {/* <Header title={"Grocery Mate"} />
        <SubTitle style={{paddingTop: 10, fontSize: 50, color: 'white'}} 
        subtitle={"Your friend at the supermarket"} /> */}
      
      <AnimationView />
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  animationContainer: {
    alignItems: 'center',
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
