import React, { useEffect, useState } from 'react'
import Logo from '../../components/Logo';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { Container, LoginInput, LoginButton, LoginContainer, CreateAccountButton } from './styles';
import { Text } from 'react-native';
import firebase from '../../config/firebaseConfig';

export default function Login({ navigation }) {
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [error, setError] = useState(false);

     function login() {
          firebase.auth().signInWithEmailAndPassword(email, password)
               .then((userCredential) => {
                    const user = userCredential.user;
                    navigation.navigate('Task', {
                         userId: user.uid
                    });
               })
               .catch((err) => {
                    setError(true);
                    const error = err.message;
               });
     };

     useEffect(() => { 
          firebase.auth().onAuthStateChanged(user => {
               if (user) {
                    navigation.navigate('Task', {
                          userId : user.uid
                    });
               }
          });
     }, []);

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
                         placeholder='Password'
                         secureTextEntry={true}
                         onChangeText={setPassword}
                    />
                    
                    <LoginButton onPress={login}>
                         <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 16 }}>Login</Text>
                    </LoginButton>
                    <CreateAccountButton onPress={() => navigation.navigate('Register')}>
                         <Text style={{ color: '#F92E6A', fontSize: 16 }}>Create account</Text>
                    </CreateAccountButton>
               </LoginContainer>
          </Container>
     );
};