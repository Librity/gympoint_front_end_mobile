import React, { useState } from 'react';
import { Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import logo from '~/assets/logoWhite.png';

import Background from '~/components/Background';
import { signInRequest } from '~/store/modules/student/actions';

import { Container, Form, FormInput, SubmitButton } from './styles';

export default function SignIn({ navigation }) {
  const dispatch = useDispatch();

  const [studentId, setStudentId] = useState('');

  const loading = useSelector(state => state.student.loading);

  const handleSubmit = () => {
    dispatch(signInRequest(studentId));
  };

  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            icon="perm-identity"
            placeholder="Informe seu ID de cadastro"
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={studentId}
            onChangeText={setStudentId}
          />

          <SubmitButton loading={loading} onPress={handleSubmit}>
            Entrar no sistema
          </SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}
