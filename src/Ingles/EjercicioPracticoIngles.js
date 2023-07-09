import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';

const ejercicios = [
  {
    id: 1,
    leccion: 'Saludos',
    contenido: '¿Cómo se escribe "Hola"?',
    respuesta: 'Hello',
  },
  {
    id: 2,
    leccion: 'Saludos',
    contenido: '¿Cómo se dice "Buenos días"?',
    respuesta: 'Good morning',
  },
  {
    id: 3,
    leccion: 'Números',
    contenido: '¿Cómo se escribe el número "10"?',
    respuesta: 'Ten',
  },
  {
    id: 4,
    leccion: 'Saludos',
    contenido: '¿Cómo se escribe la letra "A"?',
    respuesta: 'ei',
  },
  
];

const App = () => {
  const [indiceEjercicio, setIndiceEjercicio] = useState(0); 
  // Estado para el índice del ejercicio actual
  const [progreso, setProgreso] = useState(0); // Estado para el progreso actual
  const [respuestasCorrectas, setRespuestasCorrectas] = useState(0); 
  // Estado para el número de respuestas correctas
  const [respuestasIncorrectas, setRespuestasIncorrectas] = useState(0); 
  // Estado para el número de respuestas incorrectas
  const [respuestaUsuario, setRespuestaUsuario] = useState(''); 
  // Estado para la respuesta del usuario

  const ejercicioActual = ejercicios[indiceEjercicio]; 
  // Obtiene el ejercicio actual basado en el índice

  const comenzarEjercicio = () => {
    setIndiceEjercicio(0); // Reinicia el índice del ejercicio
    setProgreso(0); // Reinicia el progreso
    setRespuestasCorrectas(0); // Reinicia el contador de respuestas correctas
    setRespuestasIncorrectas(0); // Reinicia el contador de respuestas incorrectas
    setRespuestaUsuario(''); // Reinicia la respuesta del usuario
  };

  const verificarRespuesta = () => {
    const respuestaUsuarioEnMinuscula = respuestaUsuario.trim().toLowerCase(); 
    // Convierte la respuesta del usuario a minúsculas
    const respuestaCorrectaEnMinuscula = ejercicioActual.respuesta.toLowerCase(); 
    // Convierte la respuesta correcta a minúsculas

    if (respuestaUsuarioEnMinuscula === respuestaCorrectaEnMinuscula) {
      setRespuestasCorrectas(respuestasCorrectas + 1); 
      // Incrementa el contador de respuestas correctas
      Alert.alert('¡Respuesta correcta!', '¡Bien hecho!', [{ text: 'OK', onPress: siguienteEjercicio }]);
    } else {
      setRespuestasIncorrectas(respuestasIncorrectas + 1); 
      // Incrementa el contador de respuestas incorrectas
      Alert.alert('Respuesta incorrecta', `La respuesta correcta era: ${ejercicioActual.respuesta}`, [{ text: 'OK', onPress: siguienteEjercicio }]);
    }
    setProgreso(progreso + 1); // Incrementa el progreso
  };

  const siguienteEjercicio = () => {
    if (indiceEjercicio < ejercicios.length - 1) {
      setIndiceEjercicio(indiceEjercicio + 1); // Avanza al siguiente ejercicio
      setRespuestaUsuario(''); // Reinicia la respuesta del usuario
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a tus lecciones de Ingles</Text>
     
      {ejercicioActual && (
        <View>
          <Text style={styles.selectedLesson}>Seleccione las respuestas correctas:</Text>
          <Text style={styles.exercise}>{ejercicioActual.contenido}</Text>
          <TextInput
            style={styles.input}
            onChangeText={setRespuestaUsuario}
            value={respuestaUsuario}
            placeholder="Ingresa tu respuesta"
            placeholderTextColor="black"
          />
          <Button title="Comprobar respuesta" onPress={verificarRespuesta} />
        </View>
      )}
      <Text style={styles.progress}>Progreso: {progreso} / {ejercicios.length}</Text>
      {progreso === ejercicios.length && (
        <Text style={styles.result}>
          Resultado: respuestas correctas {respuestasCorrectas}, respuestas incorrectas {respuestasIncorrectas}
        </Text>
      )}
      <Button
        title="Comenzar ejercicio"
        onPress={comenzarEjercicio}
        disabled={progreso === ejercicios.length}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'black',
   
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 16,
    color: 'black',
    marginTop: 10
  },
  selectedLanguage: {
    fontSize: 16,
    marginBottom: 8,
    color: 'black',
    marginTop: 10
  },
  selectedLesson: {
    fontSize: 16,
    marginBottom: 16,
    color: 'black',
    marginTop: 10
  },
  exercise: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'black',
    marginTop: 10
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 80,
    marginTop: 10,
    color: 'black'
  },
  progress: {
    fontSize: 20,
    marginBottom: 8,
    color: 'black',
    marginTop: 20
  },
  result: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 30
  },
});

export default App;
