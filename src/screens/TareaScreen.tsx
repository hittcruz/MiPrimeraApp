import React from 'react';
import {StyleSheet, View} from 'react-native';

export const TareaScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaMorada} />
      <View style={styles.cajaNaranja} />
      <View style={styles.cajaAzul} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425B',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cajaMorada: {
    // position: 'absolute',
    // flex: 1,
    width: 100,
    height: 100,
    borderWidth: 10,
    // top: 100,
    borderColor: 'white',
    backgroundColor: '#5856D6',
  },
  cajaNaranja: {
    // position: 'absolute',
    // flex: 1,
    width: 100,
    height: 100,
    borderWidth: 10,
    top: 50,
    borderColor: 'white',
    backgroundColor: '#F0A23B',
    // right: -100,
    // marginEnd: -200,
    // alignSelf: 'flex-end',
  },
  cajaAzul: {
    // position: 'absolute',
    // flex: 2,
    // width: '100%',
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#28C4D9',
    // alignSelf: 'center',
  },
});
