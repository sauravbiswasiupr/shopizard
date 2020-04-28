import React from 'react';
import { LinearGradient } from 'expo';
import { StyleSheet, View } from 'react-native';
import { Divider } from 'react-native-elements';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';



import { primaryGradientArray } from '../../utils/Colors';
import Input from '../Input';
import Main from '../../Main';
import Header from '../Header';
import SettingsScreen from './SettingsScreen';

const headerTitle = "Shopizard"
class TaskFiller extends React.Component {
    onChangeText = () => {

    };

    onDoneAddItem = () => {

    };

    render() {
        const inputValue = "Name your task list";
        return (
            <LinearGradient colors={primaryGradientArray} style={{ flex: 1}}>
                <View style={{ alignItems: 'center', fontSize: 12 }}>
                    <Header title={headerTitle} />
					<Input
						inputValue={inputValue}
						onChangeText={this.newInputValue}
						onDoneAddItem={this.onDoneAddItem}
					/>
                    <Divider />
                   <Main />
                </View>
            </LinearGradient>
        )
    }
}

const TabNavigator = createBottomTabNavigator({
	Settings: SettingsScreen,
	Home: TaskFiller,
});

const AppContainer = createAppContainer(TabNavigator);

export default AppContainer;

