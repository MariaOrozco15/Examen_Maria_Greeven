import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  ScrollView
} from 'react-native'; 

// Definición de las preguntas del examen con sus opciones y respuestas correctas
const preguntasExamen = [
  {
    pregunta: '¿Cómo se escribe la palabra "Hola"?',
    opciones: ['Ciao', 'Arrivederci', 'Grazie', 'Sì'],
    respuestaCorrecta: 'Ciao'
  },
  {
    pregunta: '¿Cómo se escribe "Buenos días"?',
    opciones: ['Buona notte', 'Arrivederci', 'Grazie', 'Buongiorno'],
    respuestaCorrecta: 'Buongiorno'
  },
  {
    pregunta: '¿Cómo se escribe "Perro"?',
    opciones: ['Cane', 'Gatto', 'Bambini', 'Bambino'],
    respuestaCorrecta: 'Cane'
  },
  {
    pregunta: '¿Cómo se escribe la letra "W"?',
    opciones: ['vi', 'Doppia U', 'Eff', 'Di'],
    respuestaCorrecta: 'Doppia U'
  },
  {
    pregunta: '¿Qué le falta a esta frase: "Lei _____ un libro"?',
    opciones: ['legge', 'leggi', 'leggendo', 'sta leggendo'],
    respuestaCorrecta: 'sta leggendo'
  }
];

export default function App() {
  const [respuestasSeleccionadas, setRespuestasSeleccionadas] = useState([]); 
  // Estado para almacenar las respuestas seleccionadas por el usuario
  const [puntaje, setPuntaje] = useState(0); // Estado para almacenar el puntaje obtenido
  const [mostrarMensajePuntajeCero, setMostrarMensajePuntajeCero] = useState(false); 
  // Estado para controlar la visualización de un mensaje cuando el puntaje es cero

  // Maneja la selección de respuesta para una pregunta específica
  const manejarSeleccionRespuesta = (indicePregunta, opcionSeleccionada) => {
    const nuevasRespuestasSeleccionadas = [...respuestasSeleccionadas];
    //crea una nueva copia del arreglo respuestasSeleccionadas utilizando el operador 
    //de propagación (...). Esto se hace para evitar la mutación directa del estado.
    nuevasRespuestasSeleccionadas[indicePregunta] = opcionSeleccionada;// actualiza la 
    //respuesta seleccionada para la pregunta específica.
    setRespuestasSeleccionadas(nuevasRespuestasSeleccionadas);
    //actualiza el estado respuestasSeleccionadas con la nueva copia del arreglo que 
    //contiene la respuesta seleccionada actualizada.
  };

  // Calcula el puntaje del examen
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
      nuevoPuntaje = 0; // Establecer el puntaje en cero si todas las respuestas son incorrectas
    }

    setPuntaje(nuevoPuntaje);
  };

  // Maneja el final del examen y muestra el puntaje
  const manejarFinExamen = () => {
    calcularPuntaje();
    setRespuestasSeleccionadas([]);
    if (puntaje === 0) {
      setMostrarMensajePuntajeCero(true);
    }
  };

  // Reinicia el examen y restablece los valores iniciales
  const manejarReiniciarExamen = () => {
    setRespuestasSeleccionadas([]);
    setPuntaje(0);
    setMostrarMensajePuntajeCero(false);
  };

  // Renderiza una pregunta y sus opciones de respuesta en la interfaz
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

  return (
    <View style={styles.contenedor}>
      <View style={styles.contenedorBoton}>
        <Button title="Reiniciar Examen" onPress={manejarReiniciarExamen} />
      </View>
      <Text style={styles.encabezado}>Examen de Italiano</Text>
      <ScrollView style={styles.scrollView}>
        {preguntasExamen.map(renderizarPregunta)}
      </ScrollView>
      <View style={styles.contenedorBoton}>
        <Button title="Finalizar Examen" onPress={manejarFinExamen} />
      </View>
      {puntaje !== 0 ? (
        <Text style={styles.textoPuntaje}>
          Tu puntaje es: {puntaje} {puntaje >= 60 ? 'Aprobado' : 'Reprobado'}
        </Text>
      ) : (
        mostrarMensajePuntajeCero && (
          <Text style={styles.textoPuntaje}>
            Tu puntaje es: 0
          </Text>
        )
      )}
    </View>
  );
}
//Estilos
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
