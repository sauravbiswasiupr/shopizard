import React from 'react';
import { Text, View } from 'react-native';


class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>I am home!</Text>
            </View>
        );
    }
}

export default HomeScreen;

