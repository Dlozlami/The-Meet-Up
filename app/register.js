import {ImageBackground, Text, View, ScrollView } from "react-native";

export default function Register()
{
    return (
      <ImageBackground source={require('../assets/images/bg.jpg')}  style={{width: '100%', height: '100%'}}>
        <ScrollView>
          <Text style={{ margin: 10 }}>Sign Up</Text>
          <View style={{ marginTop: 512 }} />
          <Text style={{ margin: 10 }}>Welcome to React Native</Text>
        </ScrollView>
      </ImageBackground>
      );
}