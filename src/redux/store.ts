// import {applyMiddleware, createStore, compose} from 'redux';
// import {persistReducer, persistStore} from 'redux-persist';
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
// import storage from 'redux-persist/lib/storage';
// import createSagaMiddleware from 'redux-saga';
// import rootReducer from './reducers';
// const sagaMiddleware = createSagaMiddleware();
// declare global {
//   interface Window {
//     __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//   }
// }

// const composeEnhancers =
//   (typeof window !== 'undefined' &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

// const persistConfig = {
//   key: 'root',
//   storage,
//   stateReconciler: autoMergeLevel2,
//   whitelist: ['ProductReducer'],
// };
// const persistedReducer = persistReducer(persistConfig, rootReducer);
// const store = createStore(
//   persistedReducer,
//   composeEnhancers(applyMiddleware(sagaMiddleware)),
// );
// const persistor = persistStore(store);
// sagaMiddleware.run(rootSaga);
// export {store, persistor};
