import { Text, View, ScrollView } from "react-native";
import Head from "expo-router/head";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login()
{
    return (<>
          <Head>
            <meta charset="utf-8" />
            <link rel="icon" href="%PUBLIC_URL%/assets/icons/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta name="description"content="Web site created using create-react-app"/>
            <link rel="apple-touch-icon" href="%PUBLIC_URL%/assets/icons/logo192.png" />
            <link rel="stylesheet" href="./assets/css/w3.css"/>
            <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
            <title>The Meet Up | CodeTirbe Academy</title>
        </Head>
        <SafeAreaView>
          <Text style={{ margin: 10 }}>Hello World</Text>
          <View style={{ marginTop: 512 }} />
          <Text style={{ margin: 10 }}>Welcome to React Native</Text>
        </SafeAreaView>
      </>);
}