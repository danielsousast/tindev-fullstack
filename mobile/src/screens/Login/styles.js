import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: #f5f5f5;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image``;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
  autoCapitalize: 'none',
  autoCorret: false,
})`
  height: 46px;
  width: 80%;
  align-self: center;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-top: 20px;
  padding: 0 15px;
`;

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: 46px;
  width: 80%;
  background-color: #df4723;
  margin-top: 10px;
  border-radius: 4px;
`;

export const ButtonTitle = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
