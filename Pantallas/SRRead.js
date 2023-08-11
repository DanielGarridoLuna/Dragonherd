import React from 'react';
import {useState} from 'react'
import {View, StyleSheet, Text, ScrollView, Button, Image} from 'react-native';
import { db } from '../Server/Conexion';
import { collection, getDocs } from "firebase/firestore";


const SRRead = () => {

    const styles = StyleSheet.create({
        Contenedor:{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor:'#87cefa',
            margin:10
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
        color:'white',
        
        },
        Subtitulo:{
          fontSize: 25,
        },
        Header:{
          backgroundColor:'black',
          width: '100%',
        }

      });

      const [elementos, setelementos]=useState([])

      async function leer(){
        const querySnapshot = await getDocs(collection(db, "Productos"));
        const articulos=[];
            querySnapshot.forEach((doc) => {
            const {Producto, Precio, Existencia, Categoria, Imagen}=doc.data()
    
            articulos.push({
                Id:doc.id,
                Producto,
                Precio,
                Existencia,
                Categoria,
                Imagen
            })
    })
        setelementos(articulos)
    }
     

    return (
      <ScrollView style={styles.Sec}>
      
      <Button title="Leer"  onPress={() =>leer()}>Leer Productos</Button>
      {
      elementos.map(elemento=>{
          return(
              <View style={styles.Contenedor} key={elemento.Id}>
                <View style={styles.Header}>
                <Text style={styles.Titulo}>{elemento.Producto}</Text>
                </View>
                <Image
                  source={{
                  uri:elemento.Imagen
                  }}
                  style={{width: 300, height: 300}}
                />
              <Text style={styles.Subtitulo}>Precio:${elemento.Precio}</Text>
              <Text style={styles.Subtitulo}>Existencia:{elemento.Existencia} piezas</Text>
              <Text style={styles.Subtitulo}>Categoria:{elemento.Categoria}</Text>
              </View>
          );
      })
      }
      </ScrollView>
      )
}

export default SRRead