import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      padding: 24,
      justifyContent: "center",
      maxWidth: 960,
      marginHorizontal: "auto",
    },
    presents: {
        fontSize: 20,
    },
    title: {
      fontSize: 64,
      fontWeight: "bold",
    },
    subtitle: {
      fontSize: 24,
      color: "#d2ff58",
      backgroundColor:'black',
      paddingLeft:10,
      paddingBottom:5
    },

    meetSign: {
        width: 300,
        height:300,
        resizeMode:'contain'
      },
  
  });

  export default styles;