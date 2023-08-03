import React from 'react';
import {useState} from 'react'
import {View, StyleSheet, Text, ScrollView} from 'react-native';



const SRRead = () => {

    const styles = StyleSheet.create({
        Contenedor:{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            
        },
        input: {
          height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,
          color:`#dc143c`
        },
        Sec:{
          textAlign: 'center', 
          fontWeight: 'bold',
        },
        Titulo: {
        fontWeight: 'bold',
        fontSize: 30, 
        }
      });

      const [nombres]=useState(["Alejandra", "Beatriz", "Carlos", "Damian", "Erika", "Fernando", "Gael", "Homero"])
      const [numeros]=useState([25, 30, 20, 31, 23])

     

    return (
      <ScrollView style={styles.Sec}>
      <Text  style={styles.Titulo} >Leer información</Text>
      {
      numeros.map(numero=>{
          return(
              <View style={styles.Contenedor}>
              <Text style={styles.Titulo}>{numero}</Text>
              </View>
          );
      })
      }
      </ScrollView>
      )
}

export default SRRead