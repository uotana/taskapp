import React, { useEffect, useState } from 'react'
import Logo from '../../components/Logo';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { Container, LoginInput, LoginButton, LoginContainer, CreateAccountButton } from './styles';
import { Text } from 'react-native';
import firebase from '../../config/firebaseConfig';


export default function Register({ navigation }) {
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [errorRegister, setError] = useState(false);

     function register() {
          firebase.auth().createUserWithEmailAndPassword(email, password)
               .then((userCredential) => {
                    const user = userCredential.user;
                    navigation.navigate('Login', {
                         userId: user.uid    
                    });
               })
               .catch((err) => {
                    setError(true);
                    const errorRegister = err.message;
               });
     };

     useEffect(() => { }, []);

     return (
          <Container style={{ marginTop: Constants.statusBarHeight }}>
               <StatusBar style='auto' />
               <LoginContainer>
                    <Logo />
                    <LoginInput
                         placeholder='E-mail'
                         onChangeText={setEmail}
                    />
                    <LoginInput
                         placeholder='Senha'
                         secureTextEntry={true}
                         onChangeText={setPassword}
                    />

                    <CreateAccountButton onPress={register}>
                         <Text style={{ color: '#F92E6A', fontWeight: 'bold', fontSize: 16 }}>Criar conta</Text>
                    </CreateAccountButton>
                    <LoginButton onPress={() => navigation.navigate('Login')}>
                         <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 16 }}>Entrar</Text>
                    </LoginButton>
               </LoginContainer>
          </Container>
     );
};