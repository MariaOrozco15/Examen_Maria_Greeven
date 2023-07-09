import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const EnglishQuizScreen = () => {
  const [answers, setAnswers] = useState({}); // Estado para almacenar las respuestas del usuario
  const [showResults, setShowResults] = useState(false); // Estado para controlar la visualización de los resultados
  const [results, setResults] = useState([]); // Estado para almacenar los resultados de las respuestas

  // Maneja el cambio en la respuesta de una pregunta
  const handleAnswerChange = (questionId, value) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: value,
    }));
  };

  // Maneja el envío de respuestas
  const handleSubmit = () => {
    const results = Object.entries(answers).map(([questionId, answer]) => {
      let isCorrect = false;

      // Validación de respuestas
      if (questionId === '1' && compareAnswer(answer, 'Bom dia')) {
        isCorrect = true;
      }
      if (questionId === '2' && compareAnswer(answer, 'Boa noite')) {
        isCorrect = true;
      }
      if (questionId === '3' && compareAnswer(answer, 'Boa tarde')) {
        isCorrect = true;
      }

      return { questionId, isCorrect };
    });

    setResults(results);
    setShowResults(true);
  };

  // Compara la respuesta del usuario con la respuesta correcta, sin distinguir mayúsculas y minúsculas
  const compareAnswer = (userAnswer, correctAnswer) => {
    return userAnswer.trim().toLowerCase() === correctAnswer.trim().toLowerCase();
  };

  // Maneja el reinicio del cuestionario
  const handleReset = () => {
    setAnswers({});
    setResults([]);
    setShowResults(false);
  };

  // Verifica si todas las respuestas son correctas
  const allCorrect = results.every((result) => result.isCorrect);

  return (
    <View style={styles.container}>
       <Text style={styles.title}>Bienvenido a tus ejercicios de portugues</Text>
      {/* Pregunta 1 */}
      <Text style={styles.question}>¿Cómo se escribe "buenos días"?:</Text>
      <TextInput
        style={styles.input}
        value={answers['1'] || ''}
        onChangeText={(text) => handleAnswerChange('1', text)}
        placeholder="Ingresa tu respuesta"
        placeholderTextColor="black"
      />
      {/* Pregunta 2 */}
      <Text style={styles.question}>¿Cómo se escribe "buenas noches"?:</Text>
      <TextInput
        style={styles.input}
        value={answers['2'] || ''}
        onChangeText={(text) => handleAnswerChange('2', text)}
        placeholder="Ingresa tu respuesta"
        placeholderTextColor="black"
      />
      {/* Pregunta 3 */}
      <Text style={styles.question}>¿Cómo se escribe "buenas tardes"?:</Text>
      <TextInput
        style={styles.input}
        value={answers['3'] || ''}
        onChangeText={(text) => handleAnswerChange('3', text)}
        placeholder="Ingresa tu respuesta"
        placeholderTextColor="black"
      />
      {/* Botones */}
      <View style={styles.buttonContainer}>
        <Button title="Limpiar campos" onPress={handleReset} />
        <View style={styles.buttonSpacer} />
        <Button title="Enviar respuestas" onPress={handleSubmit} />
      </View>
      {/* Resultados */}
      {showResults && (
        <View>
          {results.map(({ questionId, isCorrect }) => (
            <Text
              key={questionId}
              style={[
                styles.answer,
                isCorrect ? styles.correctAnswer : styles.incorrectAnswer,
              ]}
            >
              Pregunta {questionId}: {isCorrect ? 'Correcta' : 'Incorrecta'}
            </Text>
          ))}
          {allCorrect && <Text style={styles.congratulations}>¡Felicitaciones! Todas las respuestas son correctas.</Text>}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
    marginTop: 20
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: 'black',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    
  },
  buttonSpacer: {
    width: 10,
    
  },
  answer: {
    fontSize: 16,
    marginBottom: 5,
  },
  correctAnswer: {
    color: 'green',
  },
  incorrectAnswer: {
    color: 'red',
  },
  congratulations: {
    fontSize: 18,
    marginTop: 20,
    color: 'green',
    fontWeight: 'bold',
  },
  title:{
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  }
});

export default EnglishQuizScreen;
