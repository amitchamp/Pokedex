import { STORE_POKEMON } from '../actions/actionTypes'

const initialState = {
    pokemonList: null,
    favouritePokemon: [],
}

const pokemonReducer = (state = initialState, action) => {

    switch (action.type) {
        case STORE_POKEMON:
            const { pokemonList } = action;

            return {
                ...state,
                pokemonList
            }

        default:
            return state;
    }
}

export default pokemonReducer;
