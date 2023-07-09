// App.js
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CursosScreen from './CursosScreen';
import LeccionesCurso from './LeccionesCurso';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Cursos"
          component={CursosScreen}
          options={{title: 'Inicio'}}
        />
        <Stack.Screen
          name="Lesson"
          component={LeccionesCurso}
          options={{title: 'Inicio'}}
         
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
