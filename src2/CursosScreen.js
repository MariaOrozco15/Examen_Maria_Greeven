// CursosScreen.js
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Curso from './Curso';

const CursosScreen = ({ navigation }) => {
  const handleLessonNavigation = (curso) => {
    navigation.navigate('LeccionesCurso', { curso });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lecciones</Text>

      {/* Curso de Inglés */}
      <Curso
        titulo="Inglés"
        imagen={require('../Image/descarga.png')}
        onPress={() => handleLessonNavigation('Inglés')}
      />

      {/* Curso de Portugués */}
      <Curso
        titulo="Portugués"
        imagen={require('../Image/png-clipart-flag-of-portugal-national-flag-video-flag-miscellaneous-flag.png')}
        onPress={() => handleLessonNavigation('Portugués')}
      />

      {/* Curso de Italiano */}
      <Curso
        titulo="Italiano"
        imagen={require('../Image/Itali.png')}
        onPress={() => handleLessonNavigation('Italiano')}
      />
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
});

export default CursosScreen;
