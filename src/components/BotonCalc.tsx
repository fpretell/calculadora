/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props {
  texto: string;
  background?: string;
  ancho?: boolean;
  action: (num: string) => void;
  // position?: 'br' | 'bl';
  // onPress: () => void;
}

export const BotonCalc = ({
  texto,
  background = '#2d2d2d',
  ancho = false,
  action,
}: Props) => {
  return (
    <TouchableOpacity onPress={() => action(texto)}>
      <View
        style={{
          ...styles.boton,
          backgroundColor: background,
          width: ancho ? 180 : 80,
        }}>
        {/* button */}
        <Text
          style={{
            ...styles.botonTexto,
            color: background === '9b9b9b' ? 'black' : 'white',
          }}>
          {texto}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
