import { STORE_POKEMON, STORE_POKEMON_DETAIL } from './actionTypes';

// Config
import { IMAGE_URL } from '../../config/config';

// HttpRequest
import axios from 'axios';
import { axiosInstance } from '../../config/axiosInstance';

export const storePokemon = pokemonList => dispatch => {
    return dispatch({
        type: STORE_POKEMON,
        pokemonList
    });
}

export const storePokemonDetail = pokemonDetail => dispatch => {
    return dispatch({
        type: STORE_POKEMON_DETAIL,
        pokemonDetail
    });
}

export const fetchPokemon = (url) => dispatch => {
    return axiosInstance.get(`${url}`)
        .then(response => {
            if (response && response.data && response.data.results) {
                return dispatch(storePokemon(response.data.results));
            }
        })
        .catch(error => {
            console.log("Something went wrong Listing", error);
        });
}

export const fetchPokemonDetail = (url) => dispatch => {
    return axios.get(`${url}`)
        .then(response => {
            if (response && response.data) {
                const { height, id, name, types, weight } = response.data;

                let typeValue = '';
                if (types) {
                    for (let pokeType of types) {
                        typeValue = `${typeValue}, ${pokeType.type.name}`;
                    }
                    typeValue = typeValue.substring(2);
                }

                const pokemonDetail = {
                    height,
                    id,
                    name,
                    type: typeValue,
                    weight,
                    imageUrl: `${IMAGE_URL}/${id}.png`
                }

                return dispatch(storePokemonDetail(pokemonDetail));
            }
        })
        .catch(error => {
            console.log("Something went wrong", error);
        });
}
