import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
       flex: 1,
      backgroundColor: '#FFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    firstSection: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'green',
      width: "100%",
    },
    secondSection:{
      flex: 2,
      backgroundColor:"while",
      width: "100%",
      borderTopRightRadius: 25,
      borderTopLeftRadius: 25,
      padding:20,
      justifyContent:"space-between"
    },
    title:{
      fontSize: 48,
      color: "white",
  
    },
    label:{
      color:"#ccc",
    },
    textInput:{
      color:"#000",
      padding: 8,
    },
    forgotPassword:{
      color: "#000",
      textAlign:"right",
    },
    button:{
      backgroundColor: "pink",
      padding: 15,
      borderRadius: 30,
      alignItems: "center"
    },
    buttonText:{
      color:"while",
      fontWeight: "bold",
  
    },
    spacing:{
      marginTop:10,
  
    },
    row:{
      flexDirection:"row",
      justifyContent:"center",
    },
    signup:{
      color:"pink",
      paddingLeft: 5,
    }
  })
  