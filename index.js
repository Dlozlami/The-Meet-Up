import "expo-router/entry";
import Page from './app/index';
import {store} from './store';
import { Provider } from 'react-redux';

<Provider store={store}>
  <Page />
</Provider>