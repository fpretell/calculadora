import React from 'react';
import {View, Text} from 'react-native';
import {BotonCalc} from '../components/BotonCalc';
import {useCalculadora} from '../hooks/useCalculadora';
import {styles} from '../theme/appTheme';

export const CalculadoraScreen = () => {

  const {
    limpiar,
    armarNumero,
    positivoNegativo,
    deleteNumero,
    btnDividir,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calcular,
    numero,
    numeroAnterior,
  } = useCalculadora();

  return (
    <View style={styles.calculadoraContainer}>
      {numeroAnterior !== '0' ? (
        <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
      ) : null}
      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>

      {/* fila de borones */}
      <View style={styles.fila}>
        <BotonCalc texto="C" background="#9b9b9b" action={limpiar} />
        <BotonCalc texto="+/-" background="#9b9b9b" action={positivoNegativo} />
        <BotonCalc texto="del" background="#9b9b9b" action={deleteNumero} />
        <BotonCalc texto="/" background="#ff9427" action={btnDividir} />
      </View>

      {/* fila de borones */}
      <View style={styles.fila}>
        <BotonCalc texto="7" action={armarNumero} />
        <BotonCalc texto="8" action={armarNumero} />
        <BotonCalc texto="9" action={armarNumero} />
        <BotonCalc texto="x" background="#ff9427" action={btnMultiplicar} />
      </View>

      {/* fila de borones */}
      <View style={styles.fila}>
        <BotonCalc texto="4" action={armarNumero} />
        <BotonCalc texto="5" action={armarNumero} />
        <BotonCalc texto="6" action={armarNumero} />
        <BotonCalc texto="-" background="#ff9427" action={btnRestar} />
      </View>

      {/* fila de borones */}
      <View style={styles.fila}>
        <BotonCalc texto="1" action={armarNumero} />
        <BotonCalc texto="2" action={armarNumero} />
        <BotonCalc texto="3" action={armarNumero} />
        <BotonCalc texto="+" background="#ff9427" action={btnSumar} />
      </View>

      {/* fila de borones */}
      <View style={styles.fila}>
        <BotonCalc texto="0" ancho action={armarNumero} />
        <BotonCalc texto="." action={armarNumero} />
        <BotonCalc texto="=" background="#ff9427" action={calcular} />
      </View>
    </View>
  );
};
