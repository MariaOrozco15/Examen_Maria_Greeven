import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import Lecciones from './Lecciones';
import Distinto from './Distinto';
import LeccionesPortugues from './Portugues/LeccionesPortugues';
import EjerciciosPracticosPortugues from './Portugues/EjerciciosPracticosPortugues';
import EvaluacionPortuguez from './Portugues/EvaluacionPortuguez';
import VistaLeccionItaliano from './VistaLeccionItaliano';
import LeccionesItaliano from './Italiano/LeccionesItaliano';
import EjercicioPracticoItaliano from './Italiano/EjercicioPracticoItaliano';
import EvaluacionItaliano from './Italiano/EvaluacionItaliano';
import LeccionesIngles from './Ingles/LeccionesIngles';
import EvaluacionIngles from './Ingles/EvaluacionIngles';
import EjercicioPracticoIngles from './Ingles/EjercicioPracticoIngles';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Inicio'}}
        />
        <Stack.Screen
          name="Distinto"
          component={Distinto}
          options={{title: 'Lecciones de portugues'}}
        />

        <Stack.Screen
          name="Curso"
          component={Lecciones}
          options={{title: 'Lecciones de ingles'}}
        />
          <Stack.Screen
          name="VistaLeccionItaliano"
          component={VistaLeccionItaliano}
          options={{title: 'Lecciones italiano'}}
        />

        <Stack.Screen
          name="LeccionesPortugues"
          component={LeccionesPortugues}
          options={{title: 'Lecciones iterativas'}}
        />
         <Stack.Screen
          name="EjerciciosPracticosPortugues"
          component={EjerciciosPracticosPortugues}
          options={{title: 'Ejercicios practicos'}}
        />
          <Stack.Screen
          name="EvaluacionPortuguez"
          component={EvaluacionPortuguez}
          options={{title: 'Evaluacion/examen'}}
        />
     

       <Stack.Screen
          name="LeccionesItaliano"
          component={LeccionesItaliano}
          options={{title: 'Lecciones iterativas'}}
        />
         <Stack.Screen
          name="EjercicioPracticoItaliano"
          component={EjercicioPracticoItaliano}
          options={{title: 'Ejercicios practicos'}}
        />
         <Stack.Screen
          name="EvaluacionItaliano"
          component={EvaluacionItaliano}
          options={{title: 'Examen'}}
        />
        
          <Stack.Screen
          name="LeccionesIngles"
          component={LeccionesIngles}
          options={{title: 'Lecciones iterativas'}}
        />
          <Stack.Screen
          name="EjercicioPracticoIngles"
          component={EjercicioPracticoIngles}
          options={{title: 'Ejercicios practicos'}}
        />
    
         <Stack.Screen
          name="EvaluacionIngles"
          component={EvaluacionIngles}
          options={{title: 'Examen'}}
        />
        
      </Stack.Navigator>
      
      
    </NavigationContainer>
  );
};

export default App;
