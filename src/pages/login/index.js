import { StyleSheet, SafeAreaView, View, ImageComponent, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../../styles/login'
export default function Login(props) {
  const { navigation } = props;

  const goToRegister = () => {
    navigation.navigate("Registro")
  }

  return (
    <SafeAreaView styles={styles.container}>
      <View style={styles.firstSection}>
        <Image
          source={{
            uri: 'https://pixabay.com/es/photos/gato-dormido-peque%C3%B1o-joven-gatito-8130334/',
          }}
          style={{ width: "100", height: "120%", resizeMode: "cover" }}
        />
        <View
          style={{
            position: "absolute",
          }}>
          <Text style={styles.title}>Trevelo</Text>
        </View>
      </View>
      <View style={styles.secondSection}>
        <View>
          <View style={styles.spacing}>
            <Text style={styles.label}>Email address</Text>
            <TextInput
              style={styles.textInput}
              underlineColorAndroid="pink"
              placeholder="ejemplo@ejemplo.com"
              keyboardType='email-address'
              returnKeyType='next'
            />
          </View>
          <View style={styles.spacing}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.textInput}
              underlineColorAndroid="pink"
              placeholder="********"
              secureTextEntry={true}
            />
          </View>
          <View style={styles.spacing}>
            <Text style={styles.forgotPassword}>Forgot Password</Text>
          </View>
          <View style={styles.spacing}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.spacing, styles.row]}>
          <TouchableOpacity onPress={goToRegister}>
            <Text style={styles.label}>Don't have an accoun?</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={style.signup}>Sing up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

