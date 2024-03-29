import React, { useState } from 'react';
import firebase from '../../config/firebaseConfig';
import { Container, DescriptionInput, LogoContainer, SaveButton, CancelButton, Title } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSave, faXmark } from '@fortawesome/free-solid-svg-icons';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import Logo from '../../components/Logo';
import { Text } from 'react-native';


export default function Details({ navigation, route }) {
     const database = firebase.firestore();

     const [editedDescription, setEditedDescription] = useState(route.params.description);
     const taskId = route.params.id;

     function editTask(description, id) {
          database.collection(route.params.userId).doc(id).update({
               description: description,
          });
          navigation.navigate('Task', {userId : route.params.userId});
     };

     return (
          <Container style={{ marginTop: Constants.statusBarHeight }}>
               <StatusBar style='auto' />
               <LogoContainer>
                    <Logo />
               </LogoContainer>
               <Title style={{ color: '#F92E6A' }}>Edit task</Title>
               <DescriptionInput
                    placeholder='Edit task'
                    onChangeText={setEditedDescription}
                    value={editedDescription}
               />
               <CancelButton onPress={() => navigation.navigate('Task', {userId: route.params.userId})}>
                    <FontAwesomeIcon icon={faXmark} size={24} color='#FFFFFF' />
               </CancelButton>
               <SaveButton onPress={() => editTask(editedDescription, taskId)}>
                    <FontAwesomeIcon icon={faSave} size={24} color='#FFFFFF' />
               </SaveButton>
          </Container>
     );
};