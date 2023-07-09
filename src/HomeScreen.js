
import { StyleSheet, View, Text} from 'react-native';
import Tarjeta from './Card';

const HomeScreen = ({ navigation }) => {

  const handleLessonNavigation = (curso) => {
    navigation.navigate('Curso', { curso });
  };

  const handlePortuguesNavigation = (curso) => {
    navigation.navigate('Distinto', { curso });
  };
  const handleItalianoNavigation = (curso) => {
    navigation.navigate('VistaLeccionItaliano', { curso });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cursos</Text>
      {/* Curso de Inglés */}
      <Tarjeta
        titulo="Inglés"
        imagen={require('../Image/Ingles.png')}
        onPress={() => handleLessonNavigation('Inglés')}
      />
      {/* Curso de portugues */}
      <Tarjeta
        titulo="Portugues"
        imagen={require('../Image/Portugues.png')}
        onPress={() => handlePortuguesNavigation('Portugues')}
      />
      <Tarjeta
        titulo="Italiano"
        imagen={require('../Image/Italiano.png')}
        onPress={() => handleItalianoNavigation('Italiano')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 16,
  },

 
});


export default HomeScreen;
