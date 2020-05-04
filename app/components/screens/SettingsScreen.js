import React from 'react';
import { Text, View, FlatList, InteractionManager } from 'react-native';
import { Card, Button, Icon, Header, ListItem, Divider, CheckBox } from 'react-native-elements';
import { AppLoading } from 'expo';
import { LinearGradient } from 'expo-linear-gradient';

import { primaryGradientArray } from '../../utils/Colors';

const Groceries = [{
    "key": "1",
    "items": [{ 
                "id": "1",
                "text":  "Chicken"
            }, 
            {
                "id": "2",
                "text": "Eggs"
            }, 
            {   "id": "3",
                "text": "Milk"
            }],
    "text": "Monday's Groceries"
}, {
    "key": "2",
    "items": [{ 
        "id": "1",
        "text":  "Chicken"
    }, 
    {
        "id": "2",
        "text": "Eggs"
    }, 
    {   "id": "3",
        "text": "Milk"
    }],
    "text": "Tuesdays's Groceries"
},{
    "key": "3",
    "items": [{ 
        "id": "1",
        "text":  "Chicken"
    }, 
    {
        "id": "2",
        "text": "Eggs"
    }, 
    {   "id": "3",
        "text": "Milk"
    }],
    "text": "Tuesdays's Groceries"
},{
    "key": "4",
    "items": [{ 
        "id": "1",
        "text":  "Chicken"
    }, 
    {
        "id": "2",
        "text": "Eggs"
    }, 
    {   "id": "3",
        "text": "Milk"
    }],
    "text": "Tuesdays's Groceries"
},{
    "key": "5",
    "items": [{ 
        "id": "1",
        "text":  "Chicken"
    }, 
    {
        "id": "2",
        "text": "Eggs"
    }, 
    {   "id": "3",
        "text": "Milk"
    }],
    "text": "Tuesdays's Groceries"
},{
    "key": "6",
    "items": [{ 
        "id": "1",
        "text":  "Chicken"
    }, 
    {
        "id": "2",
        "text": "Eggs"
    }, 
    {   "id": "3",
        "text": "Milk"
    }],
    "text": "Tuesdays's Groceries"
},{
    "key": "7",
    "items": [{ 
        "id": "1",
        "text":  "Chicken"
    }, 
    {
        "id": "2",
        "text": "Eggs"
    }, 
    {   "id": "3",
        "text": "Milk"
    }],
    "text": "Tuesdays's Groceries"
},{
    "key": "8",
    "items": [{ 
        "id": "1",
        "text":  "Chicken"
    }, 
    {
        "id": "2",
        "text": "Eggs"
    }, 
    {   "id": "3",
        "text": "Milk"
    }],
    "text": "Tuesdays's Groceries"
},{
    "key": "9",
    "items": [{ 
        "id": "1",
        "text":  "Chicken"
    }, 
    {
        "id": "2",
        "text": "Eggs"
    }, 
    {   "id": "3",
        "text": "Milk"
    }],
    "text": "Tuesdays's Groceries"
},{
    "key": "10",
    "items": [{ 
        "id": "1",
        "text":  "Chicken"
    }, 
    {
        "id": "2",
        "text": "Eggs"
    }, 
    {   "id": "3",
        "text": "Milk"
    }],
    "text": "Tuesdays's Groceries"
}];

export default class SettingsScreen extends React.Component {
    state = {
        loaded: false
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this.setState({
                loaded: true
            });
        });
    }

    renderItem = ({item}) => (
    <Card borderRadius={10}
        title={item.text}
        image={require('../../../assets/splash_icon.png')}
        imageStyle={{width: 100, height: 100}}
        containerStyle={{ padding: 1 }}
        initialNumToRender={2}
        >
        {
            
            item.items.map((u, i) => {
                console.log("Within Item: " + JSON.stringify(u));
                return (
                    <View key={u.id}>
                      <Divider />
                      <ListItem
                        title={u.text}
                        key={u.id}
                    />

                    </View>
                );
            })
        }
    </Card> 
    );

    render() {
        if (!this.state.loaded) {
            return <AppLoading />;
        }
        return (
            <LinearGradient colors={primaryGradientArray} style={{ flex: 1 }}>
                <Header
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'Past Purchases', style: { color: '#fff', fontSize: 20 } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
                />
                <FlatList data={Groceries}
                    renderItem={this.renderItem}
                />
            </LinearGradient>
        );
    }
}
