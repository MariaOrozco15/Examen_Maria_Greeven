import React from 'react';
import { StyleSheet, TouchableOpacity, Image, Text } from 'react-native';

const Tarjeta = ({ titulo, imagen, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={imagen} style={styles.imagen} />
      <Text style={styles.titulo}>{titulo}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 50,
    paddingVertical: 40, // Ajusta el padding vertical para hacer la tarjeta más larga
    paddingHorizontal: 110, // Ajusta el padding horizontal según tus necesidades
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.25,
    shadowRadius: 55,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  imagen: {
    width: 100,
    height: 100,
    marginBottom: 8,
    resizeMode: 'cover',
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default Tarjeta;
