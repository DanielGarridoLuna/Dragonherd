import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';



const SRUpdate = () => {

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
      });


    return (
        <View style={styles.Contenedor}>

        

        

        <TextInput
        style={styles.input}
        placeholder="Categoria"
        
        />

        </View>
      )
}

export default SRUpdate