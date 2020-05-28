import { STORE_POKEMON_DETAIL } from '../actions/actionTypes';

const initialState = {
    id: 0,
    name: null,
    type: null,
    height: null,
    weight: null,
    imageUrl: null
}

const pokemonDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case STORE_POKEMON_DETAIL:
            const { height, id, name, type, weight, imageUrl } = action.pokemonDetail;

            return {
                ...state,
                height,
                id,
                name,
                type,
                weight,
                imageUrl
            }

        default:
            return state;
    }
}

export default pokemonDetailReducer;
