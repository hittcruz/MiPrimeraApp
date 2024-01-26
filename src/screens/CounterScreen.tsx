import {StyleSheet, Text, View} from 'react-native';
import {useCounter} from '../hooks/useCounter';
import {Fab} from '../components/Fab';

export const CounterScreen = () => {
  const {contador, onPressClick} = useCounter(10);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador: {contador}</Text>
      {/* <Button title="+1" color="red" onPress={onPressClick} /> */}
      {/* <TouchableOpacity
        style={styles.fabLocationBR}
        onPress={() => onPressClick(1)}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>+1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.fabLocationBL}
        onPress={() => onPressClick(-1)}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>-1</Text>
        </View>
      </TouchableOpacity> */}
      <Fab title="+1" position="br" onPress={() => onPressClick(1)} />
      <Fab title="-1" position="bl" onPress={() => onPressClick(-1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
    top: -15,
  },
});
