import React from 'react';
import {useState} from 'react'
import {ScrollView, Button, View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import { db } from '../Server/Conexion';
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";



const SRdelete = () => {

    const styles = StyleSheet.create({
        Contenedor:{
            margin: 10,
            backgroundColor: '#7AFF0D',
        },
        Sec:{
            textAlign: 'center', // <-- the magic
            fontWeight: 'bold',
        },
        Titulo: {
            fontWeight: 'bold',
            fontSize: 30,
            
        },
        Subtitulo:{
            fontSize: 25,
        },
        boton:{
            margin: 10,
            minWidth: "80%",
            justifyContent:'center',
            alignItems:'center',
        },
        ima:{
          justifyContent:'center',
          alignItems:'center'
      }
      });

    const [elementos, setelementos]=useState([])

    async function leer(){
        const querySnapshot = await getDocs(collection(db, "Productos"));
        const articulos=[];
            querySnapshot.forEach((doc) => {
            const {Producto, Imagen}=doc.data()
    
            articulos.push({
                Id:doc.id,
                Producto,
                Imagen
            })
    })
        setelementos(articulos)
    }

    async function eliminar(iden){
        await deleteDoc(doc(db, "Productos", iden));
        alert("Se elimino correctamente el producto");
        leer();
    }


    return (
        <ScrollView style={styles.Sec}>
        <Text  style={styles.Titulo} >Eliminar información</Text>

        <Button title="Leer"  onPress={() =>leer()}>Cargar Productos</Button>
        {
        elementos.map(elemento=>{
            return(
                <TouchableOpacity 
                key={elemento.Id}
                onPress={() => eliminar(elemento.Id)}
                >
                <View style={styles.Contenedor} >
                <Text style={styles.Titulo}>{elemento.Producto}</Text>
                <View style={styles.ima}>
                <Image
                  source={{
                  uri:elemento.Imagen
                  }}
                  style={{width: 300, height: 300}}
                />
                </View>
                </View>
                </TouchableOpacity  >
            );
        })
        }
        </ScrollView>
    )
}

export default SRdelete