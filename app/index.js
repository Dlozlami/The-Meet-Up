import { ImageBackground,StyleSheet, Text, View } from "react-native";
import { useSelector } from 'react-redux';

export default function Page() {
  const {isLoggedIn,validPwd} = useSelector((store)=>store.login);
  return (
    <ImageBackground source={require('../assets/images/bg.jpg')}  style={{width: '100%', height: '100%'}}>
      <View style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.title}>Hello World</Text>
          <Text style={styles.subtitle}>{validPwd}</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },

});
