import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View } from 'react-native';
import { Divider } from 'react-native-elements';


import { primaryGradientArray } from '../../utils/Colors';
import Input from '../Input';
import Main from '../../Main';
import Header from '../Header';

const headerTitle = "Shopizard"
export default class TaskFiller extends React.Component {
    onChangeText = () => {

    };

    onDoneAddItem = () => {

    };

    render = () => {
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
        );
    }
}


