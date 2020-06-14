import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import io from 'socket.io-client';
import {styles} from '../../styles';
import logo from '../../assets/logo.png';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import itsamatch from '../../assets/itsamatch.png';

import api from '../../services/api';
import {
  Container,
  Logo,
  CardContainer,
  Card,
  Avatar,
  Footer,
  User,
  Bio,
  ButtonsContainer,
  Button,
  ButtonIcon,
  Empty,
  LogoutButton,
  MatchContainer,
  MatchImage,
  MatchAvatar,
  MatchUsername,
  MatchBio,
  MatchButton,
  MatchButtonTitle,
  MatchAvatarBox,
} from './styles';

export default function Home({route, navigation}) {
  const {id} = route.params;
  const [devs, setDevs] = useState([]);
  const [matchDev, setMatchDev] = useState(false);

  useEffect(() => {
    const socket = io('http://10.0.2.2:3333', {
      query: {user: id},
    });

    socket.on('match', (dev) => {
      setMatchDev(dev);
    });
  }, [id]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs', {
        headers: {user: id},
      });

      setDevs(response.data);
    }
    loadDevs();
  }, [id]);

  async function handleLike() {
    if (devs.length > 0) {
      const [user, ...rest] = devs;

      await api.post(`devs/${user._id}/likes`, null, {
        headers: {user: id},
      });
      setDevs(rest);
    }
  }

  async function handleDislike() {
    if (devs.length > 0) {
      const [user, ...rest] = devs;

      await api.post(`devs/${user._id}/dislikes`, null, {
        headers: {user: id},
      });
      setDevs(rest);
    }
  }

  async function handleLogout() {
    await AsyncStorage.clear();
    navigation.navigate('login');
  }

  return (
    <Container>
      <LogoutButton onPress={handleLogout}>
        <Logo source={logo} />
      </LogoutButton>

      <CardContainer>
        {devs.length > 0 ? (
          devs.map((dev, index) => (
            <Card key={index} style={{zIndex: devs.length - index}}>
              <Avatar
                source={{
                  uri: dev.avatar,
                }}
              />
              <Footer>
                <User>{dev.name}</User>
                <Bio>{dev.bio}</Bio>
              </Footer>
            </Card>
          ))
        ) : (
          <Empty>Acabou :(</Empty>
        )}
      </CardContainer>
      <ButtonsContainer>
        <Button style={styles.shadow} onPress={handleDislike}>
          <ButtonIcon source={dislike} />
        </Button>
        <Button style={styles.shadow} onPress={handleLike}>
          <ButtonIcon source={like} />
        </Button>
      </ButtonsContainer>
      {matchDev && (
        <MatchContainer>
          <MatchImage source={itsamatch} />
          <MatchAvatarBox>
            <MatchAvatar
              source={{
                uri: matchDev.avatar,
              }}
            />
          </MatchAvatarBox>
          <MatchUsername>{matchDev.name}</MatchUsername>
          <MatchBio>{matchDev.bio}</MatchBio>
          <MatchButton onPress={() => setMatchDev(false)}>
            <MatchButtonTitle>FECHAR</MatchButtonTitle>
          </MatchButton>
        </MatchContainer>
      )}
    </Container>
  );
}
