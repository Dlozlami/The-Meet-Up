import { ImageBackground,Image, Text, View } from "react-native";
import { useSelector } from 'react-redux';
import styles from '../assets/css/styles';



export default function Page() {
  const {isLoggedIn,validPwd} = useSelector((store)=>store.login);
  return (
    <ImageBackground source={require('../assets/images/bg.jpg')}  style={{width: '100%', height: '100%'}}>
      <View style={styles.container}>
        <View>
          <Text style={styles.presents}>Codetribe Academy presents</Text>
          <View>
            <Image source={require('../assets/images/meet-sign.png')}  style={styles.meetSign} />
          </View>
          <Text style={styles.subtitle}>Soweto Campus</Text>
        </View>
      </View>
    </ImageBackground>
  );
}




