
import { StyleSheet, View, Text, ScrollView} from 'react-native';
import Tarjeta from './Card';

const HomeScreen = ({ navigation }) => {
  
  const LeccionesPortuguesNavigation = (lecciones) => {
    navigation.navigate('LeccionesPortugues', { lecciones });
  };
  const EjerciciosPracticosPortuguesNavigation = (lecciones) => {
    navigation.navigate('EjerciciosPracticosPortugues', { lecciones });
  };
  const EvaluacionPortuguesNavigation = (lecciones) => {
    navigation.navigate('EvaluacionPortuguez', { lecciones });
  };

  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Lecciones en portugues</Text>
      <ScrollView>
      <Tarjeta
        titulo="Lecciones interactivas"
        imagen={require('../Image/Lecciones.png')}
        onPress={() => LeccionesPortuguesNavigation('Inglés')}
      />
      <Tarjeta
        titulo="Ejercicios practicos"
        imagen={require('../Image/Practica.png')}
        onPress={() => EjerciciosPracticosPortuguesNavigation('Inglés')}
      />
      <Tarjeta
        titulo="Evaluación de aprendizaje"
        imagen={require('../Image/Evaluacion.png')}
        onPress={() => EvaluacionPortuguesNavigation('Inglés')}
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
