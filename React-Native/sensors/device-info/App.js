import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as Device from 'expo-device';

export default function App() {
  
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{Device.modelName}</Text>
      <Text style={styles.paragraph}>{Device.brand}</Text>
      <Text style={styles.paragraph}>{Number((Device.totalMemory / 1000000).toFixed(2))} MB</Text>
      <Text style={styles.paragraph}>{Device.osVersion}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
  },
});

