// SeriesScreen.js
import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, Image, StyleSheet } from 'react-native';
import axios from 'axios';

const SeriesScreen = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/tv/top_rated', {
          params: {
            api_key: 'SUA_API_KEY',
            language: 'pt-BR'
          }
        });
        setSeries(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSeries();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={series}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.seriesItem}>
            <Image
              source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
              style={styles.seriesImage}
            />
            <Text style={styles.title}>{item.name}</Text>
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
  seriesItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  seriesImage: {
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

export default SeriesScreen;
