import firebase from 'firebase/app';
import 'firebase/database';
import { v4, validate } from 'uuid';
import constants from '../constants';

const {
  REACT_APP_API_KEY: apiKey,
  REACT_APP_DB_URL: databaseURL,
  REACT_APP_ENV: env,
} = process.env;

firebase.initializeApp({
  apiKey,
  databaseURL,
});

const db = firebase.database();

let id = document.location.pathname.substring(1);
if (!validate(id)) {
  id = v4();
}

export const fromDb = (dispatch) => {
  db.ref(`/${env}/${id}`).on('value', (data) => {
    if (data.val()) {
      dispatch({
        type: constants.SYNC,
        payload: data.val(),
      });
    }
  });
};

export const toDb = (state) => {
  if (state.data.cloud) {
    window.history.replaceState(null, document.title, `/${id}`);

    const { content } = state.data;
    db.ref(`/${env}/${id}`).set({ content });
  }
};
