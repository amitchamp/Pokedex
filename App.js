import React, { useState, Component } from 'react';
import { StyleSheet, Platform, View, Text, Alert } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { Provider } from 'react-redux'

// Store
import store from './store';

// Navigation
import PokedexNavigator from './navigation/PokedexNavigator';

const fetchFonts = () => {
  return Font.loadAsync({
    'pokemon-hollow': require('./assets/fonts/Pokemon-Hollow.ttf'),
    'pokemon-solid': require('./assets/fonts/Pokemon-Solid.ttf')
  });
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }

  return (
    <Provider store={store}>
      <PokedexNavigator />
    </Provider>
  );
}
