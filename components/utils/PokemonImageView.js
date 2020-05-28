import React from 'react';
import { Image } from 'react-native';

// config & settings
import { IMAGE_URL } from '../../config/config';

const PokemonImageView = (props) => {

    const _getImageUrl = (url) => {
        if (url) {
            let stringArray = url.split("/");
            let pokemonId = stringArray[stringArray.length - 1];
            if (pokemonId === "") {
                pokemonId = stringArray[stringArray.length - 2];
            }

            return `${IMAGE_URL}/${pokemonId}.png`;
        }

        return false;
    }
    const imageSource = _getImageUrl(props.url) || "https://tutorialscapital.com/wp-content/uploads/2017/06/android-logo.png";

    return (
        <Image
            source = {{ uri: imageSource }}
            style = {{ width: 70, height: 70 }}
        />
    );
}

export default PokemonImageView;
