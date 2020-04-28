import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { human } from 'react-native-typography'
import { lightWhite } from '../utils/Colors';


const Header = ({ title }) => (
    <View style={styles.headerContainer}>
        <Text style={styles.headerText}>
            {title}
        </Text>
    </View>
);

const styles = StyleSheet.create({
    headerContainer: {
      marginTop: 40
    },
    headerText: {
      fontFamily: 'customFont',
      fontSize: 60,
      color: lightWhite
    }
});

export default Header;