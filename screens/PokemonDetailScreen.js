import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, StyleSheet, Image } from 'react-native';

// store & actions
import { fetchPokemonDetail } from '../store/actions/pokemon';

class PokemonDetailScreen extends Component {

    componentDidMount() {
        const detailUrl = this.props.navigation.getParam('url');
        this.props.fetchPokemonDetail(detailUrl);
    }

    render() {
        return (
            <View style={styles.CardContainer}>
                <View style={styles.ImageViewContainer}>
                    <Image
                        source = {{ uri: this.props.pokemonDetail.imageUrl }}
                        style = {styles.cardImageStyle}
                    />
                </View>
                <View >
                    <Text style={styles.cardTitle}>
                    { this.props.pokemonDetail.name }
                    </Text>
                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 5,
                            marginHorizontal: 25
                            }}
                        />

                    <Text style={styles.subTitle}>
                        {this.props.pokemonDetail.type}
                    </Text>
                </View>
                <View style={styles.InformationContainer}>
                    <View style={styles.InformationSubContainer}>
                        <Text style={styles.InformationDetial}>
                            105
                        </Text>
                        <Text style={styles.InformationType}>
                            HP
                        </Text>
                    </View>

                    <View style={styles.InformationSubContainer}>
                        <Text style={styles.InformationDetial}>
                            { this.props.pokemonDetail.weight }kg
                        </Text>
                        <Text style={styles.InformationType}>
                            Weight
                        </Text>
                    </View>

                    <View style={styles.InformationSubContainer}>
                        <Text style={styles.InformationDetial}>
                        { this.props.pokemonDetail.height }m
                        </Text>
                        <Text style={styles.InformationType}>
                            Height
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
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
        marginTop: 150,
        flex: 1,
        flexDirection: 'column',
    },
    cardTitle: {
        fontFamily: 'pokemon-solid',
        fontSize: 40,
        letterSpacing: 3,
        paddingTop: 20,
        textAlign: 'center'
    },
    subTitle: {
        fontFamily: 'pokemon-solid',
        fontSize: 18,
        textAlign: 'center'
    },
    cardImageStyle: {
        width: 250,
        height: 250,
        marginTop: -140,
        marginLeft: '7%'
    },
    ImageViewContainer: {
        alignContent: 'center',
        justifyContent: 'center',
    },
    InformationContainer: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 20
    },
    InformationSubContainer: {
        flex: 1,
        flexDirection: 'column'
    },
    InformationDetial: {
        fontFamily: 'pokemon-solid',
        fontSize: 25,
        textAlign: 'center'
    },
    InformationType: {
        fontFamily: 'pokemon-solid',
        fontSize: 12,
        textAlign: 'center'
    }

});

const mapStateToProps = state => {
    return {
        pokemonDetail: state.pokemonDetail
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPokemonDetail: (url) => dispatch(fetchPokemonDetail(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetailScreen);
