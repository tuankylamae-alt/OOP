import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

const recipes = [
  {
    id: 1,
    name: 'Chicken Adobo',
    time: '45 minutes',
    description:
      'A classic Filipino dish made with chicken, soy sauce, vinegar, garlic, and spices.',
    ingredients: 'Chicken, soy sauce, vinegar, garlic, pepper, bay leaves',
  },

  {
    id: 2,
    name: 'Pancakes',
    time: '20 minutes',
    description:
      'Soft and fluffy pancakes that are perfect for breakfast.',
    ingredients: 'Flour, milk, eggs, sugar, butter, baking powder',
  },

  {
    id: 3,
    name: 'Spaghetti',
    time: '30 minutes',
    description:
      'A simple spaghetti dish with tomato sauce and ground meat.',
    ingredients: 'Spaghetti, tomato sauce, ground meat, garlic, onion',
  },
];

export default function RecipeList({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Choose a Recipe</Text>

      {recipes.map((recipe) => (
        <View style={styles.recipeCard} key={recipe.id}>
          <Text style={styles.recipeName}>{recipe.name}</Text>

          <Text style={styles.time}>
            Cooking Time: {recipe.time}
          </Text>

          <Button
            title="View Recipe"
            onPress={() =>
              navigation.navigate('RecipeDetails', {
                recipe: recipe,
              })
            }
          />
        </View>
      ))}

      <View style={styles.backButton}>
        <Button
          title="Back to Home"
          onPress={() => navigation.goBack()}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

  recipeCard: {
    padding: 20,
    marginBottom: 15,
    borderWidth: 1,
    borderRadius: 10,
  },

  recipeName: {
    fontSize: 21,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  time: {
    fontSize: 15,
    marginBottom: 12,
  },

  backButton: {
    marginTop: 10,
    marginBottom: 20,
  },
});