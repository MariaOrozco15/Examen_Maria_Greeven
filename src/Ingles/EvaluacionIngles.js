import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

const preguntasExamen = [
  {
    pregunta: '¿Cómo se escribe la palabra: "Hola"',
    opciones: ['Hello', 'Goodbye', 'Thank you', 'Yes'],
    respuestaCorrecta: 'Hello'
  },
  {
    pregunta: '¿Cómo se escribe: "Buenos días"',
    opciones: ['Good night', 'Goodbye', 'Thank you', 'Good morning'],
    respuestaCorrecta: 'Good morning'
  },
  {
    pregunta: '¿Cómo se dice: "Perro"',
    opciones: ['Dog', 'Cat', 'Childs', 'Children'],
    respuestaCorrecta: 'Dog'
  },
  {
    pregunta: '¿Cómo se escribe la letra: "W"',
    opciones: ['ei', 'Double U', 'Ef', 'Di'],
    respuestaCorrecta: 'Double U'
  },
  {
    pregunta: '¿Qué le falta a esta oración: She _____ a book.',
    opciones: ['reads', 'read', 'reading', 'is reading'],
    respuestaCorrecta: 'is reading'
  }
];

export default function App() {
  // Estado para almacenar las respuestas seleccionadas por el usuario
  const [respuestasSeleccionadas, setRespuestasSeleccionadas] = useState([]);
  // Estado para almacenar el puntaje del examen
  const [puntaje, setPuntaje] = useState(0);
  // Estado para mostrar el mensaje de puntaje cero
  const [mostrarMensajePuntajeCero, setMostrarMensajePuntajeCero] = useState(false);

  // Función para manejar la selección de respuesta
  const manejarSeleccionRespuesta = (indicePregunta, opcionSeleccionada) => {
    // Crear una nueva copia del estado de respuestas seleccionadas
    const nuevasRespuestasSeleccionadas = [...respuestasSeleccionadas];
    // Actualizar la respuesta seleccionada para la pregunta especificada
    nuevasRespuestasSeleccionadas[indicePregunta] = opcionSeleccionada;
    // Actualizar el estado de respuestas seleccionadas
    setRespuestasSeleccionadas(nuevasRespuestasSeleccionadas);
  };

  // Función para calcular el puntaje del examen
  const calcularPuntaje = () => {
    let nuevoPuntaje = 0;
    let todasRespuestasIncorrectas = true;

    // Recorrer todas las preguntas del examen
    for (let i = 0; i < preguntasExamen.length; i++) {
      // Verificar si la respuesta seleccionada coincide con la respuesta correcta
      if (respuestasSeleccionadas[i] === preguntasExamen[i].respuestaCorrecta) {
        // Incrementar el puntaje si la respuesta es correcta
        nuevoPuntaje += 20;
        todasRespuestasIncorrectas = false;
      }
    }

    // Establecer el puntaje en 0 cuando todas las respuestas son incorrectas
    if (todasRespuestasIncorrectas) {
      nuevoPuntaje = 0;
    }

    // Actualizar el estado del puntaje
    setPuntaje(nuevoPuntaje);
  };

  // Función para manejar el final del examen
  const manejarFinExamen = () => {
    // Calcular el puntaje
    calcularPuntaje();
    // Reiniciar las respuestas seleccionadas
    setRespuestasSeleccionadas([]);

    // Mostrar el mensaje de puntaje cero si el puntaje es 0
    if (puntaje === 0) {
      setMostrarMensajePuntajeCero(true);
    }
  };

  // Función para reiniciar el examen
  const manejarRecargar = () => {
    // Reiniciar las respuestas seleccionadas
    setRespuestasSeleccionadas([]);
    // Reiniciar el puntaje
    setPuntaje(0);
    // Ocultar el mensaje de puntaje cero
    setMostrarMensajePuntajeCero(false);
  };

  // Función para renderizar una pregunta
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

  // Renderizado del componente App
  return (
    <View style={styles.contenedor}>
      {/* Botón para recargar el examen */}
      <View style={styles.contenedorBoton}>
        <Button title="Recargar Examen" onPress={manejarRecargar} />
      </View>
      {/* Título del examen */}
      <Text style={styles.encabezado}>Examen de Inglés</Text>
      {/* Scroll view para mostrar las preguntas */}
      <ScrollView style={styles.scrollView}>
        {preguntasExamen.map(renderizarPregunta)}
      </ScrollView>
      {/* Botón para enviar las respuestas */}
      <View style={styles.contenedorBoton}>
        <Button title="Enviar Respuestas" onPress={manejarFinExamen} />
      </View>
      {/* Mostrar el puntaje obtenido */}
      {puntaje !== 0 ? (
        <Text style={styles.textoPuntaje}>
          Tu puntaje es: {puntaje} {puntaje >= 60 ? 'Aprobado' : 'Reprobado'}
        </Text>
      ) : (
        mostrarMensajePuntajeCero && (
          <Text style={styles.textoPuntaje}>
            Tu puntaje es de: 0
          </Text>
        )
      )}
    </View>
  );
}

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
