import produce from 'immer';

const INITIAL_STATE = {
  student: null,
  signedIn: false,
  loading: false,
};

export default function student(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@student/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@student/SIGN_IN_SUCCESS': {
        draft.student = action.payload.student;
        draft.signedIn = true;
        draft.loading = false;
        break;
      }
      case '@student/SIGN_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@student/SIGN_OUT': {
        draft.student = null;
        draft.signedIn = false;
        break;
      }
      default:
    }
  });
}
