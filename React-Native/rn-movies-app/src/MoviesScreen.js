// MoviesScreen.js
import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, Image, StyleSheet } from 'react-native';
import axios from 'axios';

const MoviesScreen = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/top_rated', {
          params: {
            api_key: 'SEU_API_KEY',
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
    <View style={styles.container}>
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
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  movieItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  movieImage: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 5,
  },
});

export default MoviesScreen;
