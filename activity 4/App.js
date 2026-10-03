import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/HomeScreen';
import RecipeList from './src/RecipeList';
import RecipeDetails from './src/RecipeDetails';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Recipe Book' }}
        />

        <Stack.Screen
          name="RecipeList"
          component={RecipeList}
          options={{ title: 'Recipes' }}
        />

        <Stack.Screen
          name="RecipeDetails"
          component={RecipeDetails}
          options={{ title: 'Recipe Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}