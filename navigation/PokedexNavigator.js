import React  from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator, HeaderTitle } from 'react-navigation-stack';
import { AntDesign, MaterialIcons } from '@expo/vector-icons'; 

// Screens
import PokemonListScreen from '../screens/PokemonListScreens';
import FavouritePokemonListScreen from '../screens/FavouritePokemonListScreen';
import PokemonDetailScreen from '../screens/PokemonDetailScreen';

import { Colors } from 'react-native/Libraries/NewAppScreen';

const defaultNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
    },
    HeaderTitle: ''
};

const homeStackNavigator = createStackNavigator(
    {
        Homepage: PokemonListScreen,
        PokemonDetail: PokemonDetailScreen
    },
    { defaultNavigationOptions: defaultNavOptions }
)

const favoriteStackNavigator = createStackNavigator(
    { Favourite: FavouritePokemonListScreen },
    { defaultNavigationOptions: defaultNavOptions }
);

const pokedexTabNavigator = createBottomTabNavigator({
    Homepage: {
        screen: homeStackNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <AntDesign name="home" size={24} color="black" />;
            }
        }
    },
    Favourite: {
        screen: favoriteStackNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <MaterialIcons name="favorite-border" size={24} color="black" />;
            }
        }
    }
});

export default createAppContainer(pokedexTabNavigator);
