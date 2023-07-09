// LeccionesCurso.js
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const LeccionesCurso = ({ route }) => {
  const { curso } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lecciones de {curso}</Text>

      {/* Lecciones de aprendizaje */}
      <Text style={styles.leccionesSubtitle}>Lección de Aprendizaje</Text>
      <View style={styles.leccionCard}>
        <Text style={styles.leccionTitle}>Lección 1</Text>
        <Text style={styles.leccionDescription}>Descripción de la lección 1</Text>
      </View>

      {/* Lecciones de práctica */}
      <Text style={styles.leccionesSubtitle}>Lección de Práctica</Text>
      <View style={styles.leccionCard}>
        <Text style={styles.leccionTitle}>Lección 2</Text>
        <Text style={styles.leccionDescription}>Descripción de la lección 2</Text>
      </View>

      {/* Lecciones de pruebas */}
      <Text style={styles.leccionesSubtitle}>Lección de Pruebas</Text>
      <View style={styles.leccionCard}>
        <Text style={styles.leccionTitle}>Lección 3</Text>
        <Text style={styles.leccionDescription}>Descripción de la lección 3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  leccionesSubtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    alignSelf: 'flex-start',
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
});

export default LeccionesCurso;
