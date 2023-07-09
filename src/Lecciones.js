
import { StyleSheet, View, Text, ScrollView} from 'react-native';
import Tarjeta from './Card';

const HomeScreen = ({ navigation }) => {
  
  const LeccionesInglesNavigation = (lecciones) => {
    navigation.navigate('LeccionesIngles', { lecciones });
  };
  const EjercicioPracticoInglesNavigation = (lecciones) => {
    navigation.navigate('EjercicioPracticoIngles', { lecciones });
  };
  const EvaluacionInglesNavigation = (lecciones) => {
    navigation.navigate('EvaluacionIngles', { lecciones });
  };

  return (
    <View style={styles.container}>
 
    <Text style={styles.title}>Lecciones</Text>
    <ScrollView>
    <Tarjeta
      titulo="Lecciones interactivas"
      imagen={require('../Image/Lecciones.png')}
      onPress={() => LeccionesInglesNavigation('Inglés')}
    />
    <Tarjeta
      titulo="Ejercicios practicos"
      imagen={require('../Image/Practica.png')}
      onPress={() => EjercicioPracticoInglesNavigation('Inglés')}
    />
    <Tarjeta
      titulo="Evaluación de aprendizaje"
      imagen={require('../Image/Evaluacion.png')}
      onPress={() => EvaluacionInglesNavigation('Inglés')}
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
  scrollView: {
    flex: 1,
    width: '100%'
  },
  
});

export default HomeScreen;
