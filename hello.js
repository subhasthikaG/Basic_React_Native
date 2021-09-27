import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  center: {
    alignItems: 'center'
  }
})

const Greeting = (props) => {
  return (
    <View style={styles.center}>
      <Text>Hello {props.name}!</Text>
    </View>
  );
}

const App = () => {
  return (
    <View style={[styles.center, {top: 50}]}>
      <Greeting name='Suba' />
      <Greeting name='Binu' />
      <Greeting name='Kaju' />
    </View>
  );
}

export default App;