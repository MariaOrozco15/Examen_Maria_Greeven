import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

// Importar los componentes necesarios de React Native

const preguntasExamen = [
  {
    pregunta: '¿Cómo se dice "Hola"?',
    opciones: ['Olá', 'Tchau', 'Obrigado', 'Sim'],
    respuestaCorrecta: 'Olá'
  },
  {
    pregunta: '¿Cómo se escribe "Buenos días"?',
    opciones: ['Boa noite', 'Tchau', 'Obrigado', 'Bom dia'],
    respuestaCorrecta: 'Bom dia'
  },
  {
    pregunta: '¿Cómo se escribe "Cachorro"?',
    opciones: ['Cão', 'Gato', 'Meninos', 'Crianças'],
    respuestaCorrecta: 'Cão'
  },
  {
    pregunta: '¿Cómo se escribe la letra "W"?',
    opciones: ['ué', 'Duplo V', 'Éf', 'Di'],
    respuestaCorrecta: 'Duplo V'
  },
  {
    pregunta: 'Complete la siguiente frase: Ela _____ um livro.',
    opciones: ['lê', 'leu', 'lendo', 'está lendo'],
    respuestaCorrecta: 'está lendo'
  }
];

// Definición de las preguntas del examen

export default function App() {
  const [respuestasSeleccionadas, setRespuestasSeleccionadas] = useState([]);
  const [puntaje, setPuntaje] = useState(0);
  const [mostrarMensajePuntajeCero, setMostrarMensajePuntajeCero] = useState(false);

  // Estado para almacenar las respuestas seleccionadas por el usuario
  // Estado para almacenar el puntaje del examen
  // Estado para mostrar el mensaje de puntaje cero

  const manejarSeleccionRespuesta = (indicePregunta, opcionSeleccionada) => {
    //manejar la selección de respuesta del usuario para una pregunta específica
    const nuevasRespuestasSeleccionadas = [...respuestasSeleccionadas];
    //Es el índice de la pregunta en el arreglo preguntasExamen que se está respondiendo.
    nuevasRespuestasSeleccionadas[indicePregunta] = opcionSeleccionada;
    //Es la opción de respuesta seleccionada por el usuario para la pregunta especificada.
    setRespuestasSeleccionadas(nuevasRespuestasSeleccionadas);
    //para actualizar el estado con la nueva copia que contiene la respuesta seleccionada.
  };

  // Función para manejar la selección de respuesta

  const calcularPuntaje = () => {
    let nuevoPuntaje = 0;
    let todasRespuestasIncorrectas = true;

    for (let i = 0; i < preguntasExamen.length; i++) {
      if (respuestasSeleccionadas[i] === preguntasExamen[i].respuestaCorrecta) {
        nuevoPuntaje += 20;
        todasRespuestasIncorrectas = false;
      }
    }

    if (todasRespuestasIncorrectas) {
      nuevoPuntaje = 0; // Establecer el puntaje en 0 cuando todas las respuestas son incorrectas
    }

    setPuntaje(nuevoPuntaje);
  };

  // Función para calcular el puntaje del examen

  const manejarFinExamen = () => {
    calcularPuntaje();
    setRespuestasSeleccionadas([]);

    if (puntaje === 0) {
      setMostrarMensajePuntajeCero(true);
    }
  };

  // Función para manejar el final del examen

  const manejarRecargar = () => {
    setRespuestasSeleccionadas([]);
    setPuntaje(0);
    setMostrarMensajePuntajeCero(false);
  };

  // Función para reiniciar el examen

  const renderizarPregunta = (pregunta, indice) => {
    return (
      <View style={styles.contenedorPregunta} key={indice}>
        <Text style={styles.textoPregunta}>{pregunta.pregunta}</Text>
        {pregunta.opciones.map((opcion, indiceOpcion) => (
          <TouchableOpacity
            style={[
              styles.botonOpcion,
              respuestasSeleccionadas[indice] === opcion && styles.botonOpcionSeleccionado
            ]}
            key={indiceOpcion}
            onPress={() => manejarSeleccionRespuesta(indice, opcion)}
          >
            <Text
              style={[
                styles.textoOpcion,
                respuestasSeleccionadas[indice] === opcion && styles.textoOpcionSeleccionado
              ]}
            >
              {opcion}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  // Función para renderizar una pregunta

  return (
    <View style={styles.contenedor}>
      <View style={styles.contenedorBoton}>
        <Button title="Comenzar de nuevo" onPress={manejarRecargar} />
      </View>
      <Text style={styles.encabezado}>Examen de portugués</Text>
      <ScrollView style={styles.scrollView}>
        {preguntasExamen.map(renderizarPregunta)}
      </ScrollView>
      <View style={styles.contenedorBoton}>
        <Button title="Enviar respuesta" onPress={manejarFinExamen} />
      </View>
      {puntaje !== 0 ? (
        <Text style={styles.textoPuntaje}>
          Tu puntuación fue de: {puntaje} {puntaje >= 60 ? 'Aprobado' : 'Reprobado'}
        </Text>
      ) : (
        mostrarMensajePuntajeCero && (
          <Text style={styles.textoPuntaje}>
            Tu puntuación fue de 0
          </Text>
        )
      )}
    </View>
  );
}

// Renderizado del componente App

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16
  },
  encabezado: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'black'
  },
  scrollView: {
    flex: 1,
    width: '100%'
  },
  contenedorPregunta: {
    marginBottom: 24,
    color: 'black'
  },
  textoPregunta: {
    fontSize: 18,
    marginBottom: 12,
    color: 'black'
  },
  botonOpcion: {
    backgroundColor: '#f0f0f0',
    padding: 12,
    marginBottom: 8,
    borderRadius: 8
  },
  botonOpcionSeleccionado: {
    backgroundColor: '#87ceeb'
  },
  textoOpcion: {
    fontSize: 16,
    color: 'black'
  },
  textoOpcionSeleccionado: {
    color: 'white'
  },
  textoPuntaje: {
    fontSize: 18,
    marginTop: 24,
    color: 'black'
  },
  contenedorBoton: {
    alignSelf: 'flex-start',
    marginBottom: 16
  }
});
