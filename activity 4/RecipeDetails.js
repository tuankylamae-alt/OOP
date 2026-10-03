import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

export default function RecipeDetails({ route, navigation }) {
  const { recipe } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{recipe.name}</Text>

      <Text style={styles.sectionTitle}>Cooking Time</Text>
      <Text style={styles.text}>{recipe.time}</Text>

      <Text style={styles.sectionTitle}>Description</Text>
      <Text style={styles.text}>{recipe.description}</Text>

      <Text style={styles.sectionTitle}>Ingredients</Text>
      <Text style={styles.text}>{recipe.ingredients}</Text>

      <View style={styles.button}>
        <Button
          title="Back to Recipes"
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
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 25,
    textAlign: 'center',
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 8,
  },

  text: {
    fontSize: 16,
    lineHeight: 24,
  },

  button: {
    marginTop: 30,
  },
});