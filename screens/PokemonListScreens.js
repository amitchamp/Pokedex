import React, { Component } from 'react';
import { connect } from 'react-redux';

// store & actions
import { fetchPokemon } from '../store/actions/pokemon';

// Custom components
import PokemonListView from '../components/utils/PokemonListView';

class PokemonListScreen extends Component {

    componentDidMount() {
        this.props.fetchPokemon('pokemon?limit=151');
    }

    _pushToDetailScreen = (detailUrl) => {
        this.props.navigation.navigate({
            routeName: 'PokemonDetail',
            params: {
                url: detailUrl
            }
        });
    }

    render() {
        return (
            <PokemonListView
                pokemonList={this.props.pokemonList}
                showDetail={this._pushToDetailScreen}
            />
        );
    }
}

PokemonListScreen.navigationOptions = {
    headerTitle: "Pokemon"
}

const mapStateToProps = state => {
    return {
        pokemonList: state.pokemon.pokemonList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPokemon: (url) => dispatch(fetchPokemon(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonListScreen);
