import { ImageBackground,Text, View, ScrollView } from "react-native";

export default function Login()
{
    return (<ImageBackground source={require('../assets/images/bg.jpg')}  style={{width: '100%', height: '100%'}}>
        <ScrollView >
          <Text style={{ margin: 10 }}>Hello World</Text>
          <View style={{ marginTop: 512 }} />
          <Text style={{ margin: 10 }}>log in</Text>
        </ScrollView>
        </ImageBackground>
        );
}