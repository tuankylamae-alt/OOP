import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recipe Book</Text>

      <Text style={styles.description}>
        Welcome to the Recipe Book!
      </Text>

      <Text style={styles.description}>
        Find simple and delicious recipes.
      </Text>

      <Button
        title="View Recipes"
        onPress={() => navigation.navigate('RecipeList')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  description: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
});