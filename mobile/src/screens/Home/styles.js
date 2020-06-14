import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding-top: 20px;
  background-color: #f5f5f5;
  align-items: center;
  justify-content: space-around;
`;

export const Logo = styled.Image`
  align-self: center;
`;

export const CardContainer = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  max-height: 500px;
`;

export const Card = styled.View`
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 30px;
  overflow: hidden;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const Avatar = styled.Image`
  flex: 1;
  height: 300px;
`;

export const Footer = styled.View`
  background-color: #fff;
  padding: 20px 15px;
`;

export const User = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

export const Bio = styled.Text.attrs({
  numberOfLines: 3,
})`
  font-size: 14px;
  color: #999;
  margin-top: 5px;
  line-height: 20px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-bottom: 30px;
  z-index: 999;
`;

export const Button = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  margin: 0 20px;
`;

export const ButtonIcon = styled.Image`
  background-color: #f5f5f5;
`;

export const Empty = styled.Text`
  align-self: center;
  color: #999;
  font-weight: bold;
  font-size: 20px;
`;

export const LogoutButton = styled.TouchableOpacity``;

export const MatchContainer = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 999;
`;

export const MatchImage = styled.Image``;

export const MatchAvatarBox = styled.View`
  border-radius: 100px;
  margin: 30px 0;
  border: 5px solid #fff;
`;

export const MatchAvatar = styled.Image`
  width: 160px;
  height: 160px;
  border-radius: 100px;
`;

export const MatchUsername = styled.Text`
  font-size: 32px;
  color: #fff;
`;

export const MatchBio = styled.Text`
  margin-top: 10px;
  font-size: 20px;
  line-height: 30px;
  max-width: 400px;
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
`;

export const MatchButton = styled.TouchableOpacity`
  border: 0;
  font-weight: bold;
  font-size: 18px;
  margin-top: 30px;
`;

export const MatchButtonTitle = styled.Text`
  color: rgba(255, 255, 255, 0.8);
  font-weight: bold;
`;
