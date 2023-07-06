import { Text, View, ScrollView } from "react-native";
import Head from "expo-router/head";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login()
{
    return (<>
        <ScrollView >
          <Text style={{ margin: 10 }}>Hello World</Text>
          <View style={{ marginTop: 512 }} />
          <Text style={{ margin: 10 }}>Welcome to React Native</Text>
        </ScrollView>
      </>);
}