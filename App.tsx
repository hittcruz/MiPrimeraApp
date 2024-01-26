import React from 'react';
//import {HolaMundoScreen} from './src/screens/HolaMundoScreen';
//import {CounterScreen} from './src/screens/CounterScreen';
// import {BoxObjectModelScreen} from './src/screens/BoxObjectModelScreen';
import {SafeAreaView} from 'react-native';
// import {DimensionesScreen} from './src/screens/DimensionesScreen';
// import {PositionScreen} from './src/screens/PositionScreen';
import {FlexScreen} from './src/screens/FlexScreen';
import {TareaScreen} from './src/screens/TareaScreen';

export const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#28425B'}}>
      {/* <CounterScreen /> */}
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionesScreen /> */}
      {/* <PositionScreen /> */}
      {/* <FlexScreen /> */}
      <TareaScreen />
    </SafeAreaView>
  );
};
