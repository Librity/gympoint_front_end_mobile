import {
  takeLatest,
  call,
  put,
  all,
  // delay
} from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '~/services/api';

import { signInSuccess, signInFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { studentId } = payload;

    const response = yield call(api.get, `/students/${studentId}`);

    // yield delay(3000);

    yield put(signInSuccess(response.data));
  } catch (err) {
    Alert.alert('Falha no login!', 'Aluno não existe.');
    yield put(signInFailure());
  }
}

export default all([takeLatest('@student/SIGN_IN_REQUEST', signIn)]);
