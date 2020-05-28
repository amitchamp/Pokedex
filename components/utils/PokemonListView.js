import React from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native'

// Custom components
import PokemonCardView from '../UI/PokemonCardView';

const PokemonListView = (props) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={props.pokemonList}
                renderItem={ ({item}) => 
                    <TouchableOpacity
                        onPress={() => props.showDetail(item.url)}
                    >
                        <PokemonCardView
                            name={item.name}
                            url={item.url}
                        />
                    </TouchableOpacity>
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  });

export default PokemonListView;
