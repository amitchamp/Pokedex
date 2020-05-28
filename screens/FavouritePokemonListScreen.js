import React from 'react';
import { Text } from 'react-native'

const FavouritePokemonListScreen = () => {
    return (
        <Text> Welcome to FavouritePokemonListScreen! </Text>
    );
}

FavouritePokemonListScreen.navigationOptions = {
    headerTitle: "My Favourite"
}

export default FavouritePokemonListScreen;