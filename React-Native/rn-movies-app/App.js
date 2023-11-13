import * as React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MoviesScreen from './src/MoviesScreen';
import SeriesScreen from './src/SeriesScreen';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title="Go to Movies"
          onPress={() => navigation.navigate('Movies')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Go to Series"
          onPress={() => navigation.navigate('Series')}
        />
      </View>
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Movies" component={MoviesScreen} />
        <Stack.Screen name="Series" component={SeriesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginBottom: 20,
    width: '80%',
  }
});

export default App;
