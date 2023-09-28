import React, { useState, useEffect } from 'react';
import { Text,StyleSheet, SafeAreaView, View, Image,TextInput, TouchableOpacity,Button,Platform } from "react-native";
import * as ImagePicker from 'expo-image-picker';

import { styles } from '../../styles/register'

export default function Register(props) {
  const { navigation } = props;
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const goToLogin = () => {
    navigation.navigate("Login");
  }


  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.firstSection}>
        <View>
          <View>
            <Text style={styles.title}>Regístrar cuenta</Text>
          </View>
          <View>
            <Text style={styles.formTitle}>Se necesita más información.</Text>
          </View>

          <View style={styles.spacing}>
            <Text style={styles.label}>Nombre</Text>
            <TextInput
              style={styles.textInput}
              underlineColorAndroid="pink"
              placeholder="Ingrese su nombre"
            />
          </View>
          <View style={styles.spacing}>
            <Text style={styles.label}>Correo electrónico</Text>
            <TextInput
              style={styles.textInput}
              underlineColorAndroid="pink"
              placeholder="ejemplo@ejemplo.com"
              keyboardType='email-address'
              returnKeyType='next'
            />
          </View>

          <View style={styles.spacing}>
            <Text style={styles.label}>Contraseña</Text>
            <TextInput
              style={styles.textInput}
              underlineColorAndroid="pink"
              placeholder="********"
              secureTextEntry={true}
            />
          </View>
          <View style={styles.spacing}>
            <Text style={styles.label}>Confirmar la contraseña</Text>
            <TextInput
              style={styles.textInput}
              underlineColorAndroid="pink"
              placeholder="********"
              secureTextEntry={true}
            />
          </View>
          <View style={styles.spacing}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Siguiente</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button title="Pick an image from camera roll" onPress={pickImage} />
          {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        </View>

        <View style={[styles.spacing, styles.row]}>
          <Text style={styles.label}>¿Ya tienes una cuenta?</Text>
          <TouchableOpacity onPress={goToLogin}>
            <Text style={styles.signUp}>Inicia sesión</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
}

