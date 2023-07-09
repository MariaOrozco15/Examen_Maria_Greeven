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
    { titulo: 'Lección 1', descripcion: 'La letra A se escribe y se pronuncia como "ei"' },
    { titulo: 'Lección 2', descripcion: 'La letra B se escribe y se pronuncia como "bi"' },
    { titulo: 'Lección 3', descripcion: 'La letra C se escribe y se pronuncia como "si"' },
    { titulo: 'Lección 4', descripcion: 'La letra D se escribe y se pronuncia como "di"' },
    { titulo: 'Lección 5', descripcion: 'La letra E se escribe y se pronuncia como "i"' },
    { titulo: 'Lección 6', descripcion: 'La letra F se escribe y se pronuncia como "ef"' },
    { titulo: 'Lección 7', descripcion: 'La letra G se escribe y se pronuncia como "yi"' },
    { titulo: 'Lección 8', descripcion: 'La letra H se escribe y se pronuncia como "eich"' },
    { titulo: 'Lección 9', descripcion: 'La letra I se escribe y se pronuncia como "ai"' },
    { titulo: 'Lección 10', descripcion: 'La letra J se escribe y se pronuncia como "yei"' },
    { titulo: 'Lección 11', descripcion: 'La letra K se escribe y se pronuncia como "kei"' },
    { titulo: 'Lección 12', descripcion: 'La letra L se escribe y se pronuncia como "el"' },
    { titulo: 'Lección 13', descripcion: 'La letra M se escribe y se pronuncia como "em"' },
    { titulo: 'Lección 14', descripcion: 'La letra N se escribe y se pronuncia como "en"' },
    { titulo: 'Lección 15', descripcion: 'La letra O se escribe y se pronuncia como "ou"' },
    { titulo: 'Lección 16', descripcion: 'La letra P se escribe y se pronuncia como "pi"' },
    { titulo: 'Lección 17', descripcion: 'La letra Q se escribe y se pronuncia como "kiu"' },
    { titulo: 'Lección 18', descripcion: 'La letra R se escribe y se pronuncia como "ar"' },
    { titulo: 'Lección 19', descripcion: 'La letra S se escribe y se pronuncia como "es"' },
    { titulo: 'Lección 20', descripcion: 'La letra T se escribe y se pronuncia como "ti"' },
    { titulo: 'Lección 21', descripcion: 'La letra U se escribe y se pronuncia como "iu"' },
    { titulo: 'Lección 22', descripcion: 'La letra V se escribe y se pronuncia como "vi"' },
    { titulo: 'Lección 23', descripcion: 'La letra W se escribe y se pronuncia como "dabliu"' },
    { titulo: 'Lección 24', descripcion: 'La letra X se escribe y se pronuncia como "eks"' },
    { titulo: 'Lección 25', descripcion: 'La letra Y se escribe y se pronuncia como "uai"' },
    { titulo: 'Lección 26', descripcion: 'La letra Z se escribe y se pronuncia como "zi"' },
    
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
      <Text style={styles.title}>Lecciones de Inglés {curso}</Text>

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
    padding: 16,
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
    color: 'black',
    marginTop: 10
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
