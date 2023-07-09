
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Tarjeta from './Card';

const HomeScreen = ({ navigation }) => {
  
  const LeccionesItalianoNavigation = (lecciones) => {
    navigation.navigate('LeccionesItaliano', { lecciones });
  };
  const EjerciciosPracticosItalianoNavigation = (lecciones) => {
    navigation.navigate('EjercicioPracticoItaliano', { lecciones });
  };
  const EvaluacionItalianoNavigation = (lecciones) => {
    navigation.navigate('EvaluacionItaliano', { lecciones });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lecciones en Italiano</Text>
      <ScrollView>
      <Tarjeta
        titulo="Lecciones interactivas"
        imagen={require('../Image/Lecciones.png')}
        onPress={() => LeccionesItalianoNavigation('Inglés')}
      />
      <Tarjeta
        titulo="Ejercicios practicos"
        imagen={require('../Image/Practica.png')}
        onPress={() => EjerciciosPracticosItalianoNavigation('Inglés')}
      />
      <Tarjeta
        titulo="Evaluación de aprendizaje"
        imagen={require('../Image/Evaluacion.png')}
        onPress={() => EvaluacionItalianoNavigation('Inglés')}
      />
      </ScrollView>
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
    color: 'black',
    marginBottom: 16,
  },
  
});

export default HomeScreen;
