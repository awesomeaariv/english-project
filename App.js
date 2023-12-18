import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogBox } from 'react-native';

import MainScreen from './src/screens/MainScreen';
import GameOverScreen from './src/screens/GameOverScreen';

import Game1 from './src/screens/Game1';
import Game2 from './src/screens/Game2';
import Game3 from './src/screens/Game3';
import Game4 from './src/screens/Game4';
import Game5 from './src/screens/Game5';
import Game6 from './src/screens/Game6';
import Game7 from './src/screens/Game7';
import Game8 from './src/screens/Game8';
import Game9 from './src/screens/Game9';
import Game10 from './src/screens/Game10';

LogBox.ignoreAllLogs();

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Game1" component={Game1} />
        <Stack.Screen name="Game2" component={Game2} />
        <Stack.Screen name="Game3" component={Game3} />
        <Stack.Screen name="Game4" component={Game4} />
        <Stack.Screen name="Game5" component={Game5} />
        <Stack.Screen name="Game6" component={Game6} />
        <Stack.Screen name="Game7" component={Game7} />
        <Stack.Screen name="Game8" component={Game8} />
        <Stack.Screen name="Game9" component={Game9} />
        <Stack.Screen name="Game10" component={Game10} />
        <Stack.Screen name="GameOver" component={GameOverScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}