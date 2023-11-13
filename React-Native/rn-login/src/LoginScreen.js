import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Image } from 'react-native';
import logo from "../assets/favicon.png"

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailLogin = 'admin@unifg.com.br';
  const passwordLogin = 'admin123';

  const isValidEmail = (email) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

  const handleLogin = () => {
    if (isValidEmail(email) && email === emailLogin && password === passwordLogin) {
      Alert.alert('Login realizado com Sucesso');
    } else {
      Alert.alert('Falha no Login', 'E-mail inválido ou senha incorreta');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo}></Image>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
      <Text style={styles.createAccountText}>Criar uma conta</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
  },
  createAccountText: {
    marginTop: 20,
    color: '#0000ff',
    textDecorationLine: 'underline',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 30,
    alignSelf: 'center',
  }
});

export default LoginScreen;
