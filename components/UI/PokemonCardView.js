import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import PokemonImageView from '../utils/PokemonImageView';

const PokemonCardView = (props) => {
    return (
        <View style={styles.CardContainer}>
            <View>
                <PokemonImageView
                    url={props.url}
                />
            </View>
            <Text style={styles.cardTitle}>{ props.name }</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    CardContainer: {
        width: '90%',
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#78909C',
        padding: 15,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 10,
        elevation: 1.5,
        backgroundColor: 'white',
        marginHorizontal: 15,
        marginBottom: 10,
        flex: 1,
        flexDirection: 'row'
    },
    cardTitle: {
        fontFamily: 'pokemon-solid',
        fontSize: 20,
        letterSpacing: 2,
        paddingLeft: 20
    },
});

export default PokemonCardView;
