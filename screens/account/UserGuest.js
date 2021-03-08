import React from 'react'
import { Button } from 'react-native-elements'
import { StyleSheet, Text, ScrollView, Image } from 'react-native'
import {useNavigation} from '@react-navigation/native'
export default function UserGuest() {
       const navigation = useNavigation()
    return (
       <ScrollView
         centerContent
         style={styles.viewBody}
        >
          <image
            source={require("../../assets/restaurant-logo.png")}
            resizeMode="contain"
            style={styles.image}
          />
         <Text style = {styles.title}> Consulta tu Perfil en Restaurants</Text>
         <Text style={styles.descriptions}>
             ¿Como Describirias tu Mejor Restauranre? Busca y Visualiza los Mejores Restaurantes
              de una forma sencilla, Vota cual te agustado mas y comenta como ha sido tu experiencia.
         </Text>
         <Button
           buttonstyle={styles.button}
           title="Ver tu perfil"
           onPress={() => navigation.navigate("login")}
         />
       </ScrollView>
    )
}

const styles = StyleSheet.create({
    viewBody:{
        marginHorizontal: 30
    },
    image:{
        height: 30,
        width: "100%",
        marginBottom: 10,
            },
    title:{
        fontWeight:"bold",
        fontSize:19,
        marginVertical:10,
        textAlign:"center"

    },
    description:{
      textAlign:"justify",
      marginBottom:20,
      color:"#a65273"
    },
    button:{
        backgroundColor:"#442484"
    }
})
