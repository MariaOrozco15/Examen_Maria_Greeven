// Curso.js
import React from 'react';
import { StyleSheet, TouchableOpacity, Image, Text } from 'react-native';

const Curso = ({ titulo, imagen, onPress }) => {
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
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagen: {
    width: 60,
    height: 60,
    marginBottom: 8,
    resizeMode: 'cover',
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default Curso;
