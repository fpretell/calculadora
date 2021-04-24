/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {CalculadoraScreen} from './src/screens/calculadoraScreen';
import {styles} from './src/theme/appTheme';

export const App = () => {
  return (
    <SafeAreaView
      style={styles.fondo}
      // style={{flex: 1}}
    >
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <CalculadoraScreen />
    </SafeAreaView>
  );
};
