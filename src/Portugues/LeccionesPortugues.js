import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';

const Leccion = ({ titulo, descripcion }) => {
  return (
    <View style={styles.leccionCard}>
      <Text style={styles.leccionTitle}>{titulo}</Text>
      <Text style={styles.leccionDescription}>{descripcion}</Text>
    </View>
  );
};

const LeccionesIterativa = ({ route }) => {
  const { curso } = route.params;
  const [lecciones, setLecciones] = useState([
    { titulo: 'Lección 1', descripcion: 'A letra A se escreve e pronuncia como "a"' },
    { titulo: 'Lección 2', descripcion: 'A letra B se escreve e pronuncia como "bê"' },
    { titulo: 'Lección 3', descripcion: 'A letra C se escreve e pronuncia como "cê"' },
    { titulo: 'Lección 4', descripcion: 'A letra D se escreve e pronuncia como "dê"' },
    { titulo: 'Lección 5', descripcion: 'A letra E se escreve e pronuncia como "é"' },
    { titulo: 'Lección 6', descripcion: 'A letra F se escreve e pronuncia como "éfe"' },
    { titulo: 'Lección 7', descripcion: 'A letra G se escreve e pronuncia como "gê"' },
    { titulo: 'Lección 8', descripcion: 'A letra H se escreve e pronuncia como "agá"' },
    { titulo: 'Lección 9', descripcion: 'A letra I se escreve e pronuncia como "i"' },
    { titulo: 'Lección 10', descripcion: 'A letra J se escreve e pronuncia como "jota"' },
    { titulo: 'Lección 11', descripcion: 'A letra K se escreve e pronuncia como "cá"' },
    { titulo: 'Lección 12', descripcion: 'A letra L se escreve e pronuncia como "éle"' },
    { titulo: 'Lección 13', descripcion: 'A letra M se escreve e pronuncia como "eme"' },
    { titulo: 'Lección 14', descripcion: 'A letra N se escreve e pronuncia como "ene"' },
    { titulo: 'Lección 15', descripcion: 'A letra O se escreve e pronuncia como "ó"' },
    { titulo: 'Lección 16', descripcion: 'A letra P se escreve e pronuncia como "pê"' },
    { titulo: 'Lección 17', descripcion: 'A letra Q se escreve e pronuncia como "quê"' },
    { titulo: 'Lección 18', descripcion: 'A letra R se escreve e pronuncia como "érre"' },
    { titulo: 'Lección 19', descripcion: 'A letra S se escreve e pronuncia como "ésse"' },
    { titulo: 'Lección 20', descripcion: 'A letra T se escreve e pronuncia como "tê"' },
    { titulo: 'Lección 21', descripcion: 'A letra U se escreve e pronuncia como "u"' },
    { titulo: 'Lección 22', descripcion: 'A letra V se escreve e pronuncia como "vê"' },
    { titulo: 'Lección 23', descripcion: 'A letra W se escreve e pronuncia como "dáblio"' },
    { titulo: 'Lección 24', descripcion: 'A letra X se escreve e pronuncia como "xis"' },
    { titulo: 'Lección 25', descripcion: 'A letra Y se escreve e pronuncia como "ípsilon"' },
    { titulo: 'Lección 26', descripcion: 'A letra Z se escreve e pronuncia como "zê"' },
  ]);
  const [leccionActual, setLeccionActual] = useState(0);

  const avanzarLeccion = () => {
    if (leccionActual < lecciones.length - 1) {
      setLeccionActual(leccionActual + 1);
    }
  };

  const reiniciarLecciones = () => {
    setLeccionActual(0);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Lecciones de Portugués {curso}</Text>

      {/* Botón de reinicio */}
      <TouchableOpacity onPress={reiniciarLecciones} style={styles.button}>
        <Text style={styles.buttonText}>Reiniciar</Text>
      </TouchableOpacity>

      {/* Lección actual */}
      <Text style={styles.leccionesSubtitle}>Lección Actual</Text>
      <Leccion
        titulo={lecciones[leccionActual].titulo}
        descripcion={lecciones[leccionActual].descripcion}
      />
      <TouchableOpacity onPress={avanzarLeccion} style={styles.button}>
        <Text style={styles.buttonText}>Siguiente Lección</Text>
      </TouchableOpacity>

      {/* Lecciones anteriores */}
      <Text style={styles.leccionesSubtitle}>Lecciones Anteriores</Text>
      {lecciones.slice(0, leccionActual).map(({ titulo, descripcion }) => (
        <Leccion key={titulo} titulo={titulo} descripcion={descripcion} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'black',
  },
  leccionesSubtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    alignSelf: 'flex-start',
    color: 'black'
  },
  leccionCard: {
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
  },
  leccionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10
  },
  leccionDescription: {
    fontSize: 14,
    color: 'gray',
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 8,
    padding: 12,
    marginTop: 16,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default LeccionesIterativa;
