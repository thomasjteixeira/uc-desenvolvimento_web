import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, Text, View, StyleSheet, Image } from 'react-native';
import axios from 'axios';

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/top_rated', {
          params: {
            api_key: 'SUA_API_KEY',
            language: 'pt-BR'
          }
        });
        setMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.movieItem}>
            <Image
              source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
              style={styles.movieImage}
            />
            <Text style={styles.title}>{item.title}</Text>
            <Text>Nota: {item.vote_average}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  movieItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  movieImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 10,
  },
});

export default App;
