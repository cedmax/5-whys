import { createStore, compose } from 'redux';
import reducers from 'store/reducers';
import { fromDb, toDb } from 'store/helpers/firebase-adapter';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers());

store.subscribe(() => toDb(store.getState()));
fromDb(store.dispatch);

export default store;
