import { combineReducers } from 'redux';

import pokemonReducer from './pokemon';
import pokemonDetailReducer from './pokemonDetail';

const rootReducer = combineReducers({
    pokemon: pokemonReducer,
    pokemonDetail: pokemonDetailReducer
});

export default rootReducer;
