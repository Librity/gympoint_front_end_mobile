import { all } from 'redux-saga/effects';

import student from './student/saga';

export default function* rootSaga() {
  return yield all([student]);
}
