import React from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native'

class Spinner extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="white" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
})

export default Spinner;