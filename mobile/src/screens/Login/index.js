/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {Platform} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../services/api';
import {Container, Input, Button, ButtonTitle, Logo} from './styles';
import logo from '../../assets/logo.png';

export default function Login({navigation}) {
  const [username, setUsername] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('user').then((user) => {
      if (user) {
        setUsername('');
        handleNavigate(user);
      }
    });
  }, []);

  async function handleLogin() {
    const response = await api.post('devs', {username});
    const {_id: id} = response.data;

    await AsyncStorage.setItem('user', id);

    handleNavigate(id);
  }

  function handleNavigate(id) {
    navigation.navigate('home', {id});
  }

  return (
    <Container behavior="padding" enabled={Platform.OS === 'ios'}>
      <Logo source={logo} />
      <Input
        placeholder="Digite seu usuário no GitHub"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <Button onPress={handleLogin}>
        <ButtonTitle>Entrar</ButtonTitle>
      </Button>
    </Container>
  );
}
