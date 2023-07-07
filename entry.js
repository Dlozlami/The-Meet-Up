import "@expo/metro-runtime";

import { ExpoRoot } from "expo-router";
import Head from "expo-router/head";
import { renderRootComponent } from "expo-router/src/renderRootComponent";
import {store}  from './store';
import { Provider } from 'react-redux';


const ctx = require.context(
  process.env.EXPO_ROUTER_APP_ROOT,
  true,
  /.*/,
  process.env.EXPO_ROUTER_IMPORT_MODE
);

// Must be exported or Fast Refresh won't update the context
export function App() {
  return (
    <Provider store={store}>
      <Head.Provider>
        <ExpoRoot context={ctx} />
      </Head.Provider>
    </Provider>
  );
}

renderRootComponent(App);
