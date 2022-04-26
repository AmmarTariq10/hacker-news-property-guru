import thunk from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

export const persistConfig = {
    key: 'hacker-news',
    storage: AsyncStorage,
    debug: __DEV__,
    blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, reducers);
export const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunk)),
);
export const persistor = persistStore(store);