import React from 'react';
import { Image, rStyleSheet, Text, View } from 'react-native';
import suba from './assets/suba.jpg'; 
export default function App() {
  return (
    <View style={styles.container}>
    <Image source={suba} style={{ width: 305, height: 159 }} /> 
      <Text style={{color: 'green', fontSize: 18}}> 
        To share a photo from your phone with a friend, just press the button below!
        </Text>
        <Text style={{color: 'blue', fontSize: 18}}> 
         just press the button below!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});