import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";

import styles from "../styles/grocerystyles";

export default function Grocery({
  groceries,
  toggleGrocery,
  deleteGrocery,
}) {

  // Render each grocery item
  const renderGrocery = ({ item }) => {
    return (
      <View style={styles.groceryRow}>

        {/* Grocery Item */}
        <TouchableOpacity
          style={styles.groceryInfo}
          onPress={() => toggleGrocery(item.id)}
        >

          <View
            style={[
              styles.checkbox,
              item.completed && styles.checkboxCompleted,
            ]}
          >
            {item.completed && (
              <Text style={styles.checkmark}>✓</Text>
            )}
          </View>

          <Text
            style={[
              styles.groceryText,
              item.completed && styles.completedText,
            ]}
          >
            {item.name}
          </Text>

        </TouchableOpacity>

        {/* Delete Button */}
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => deleteGrocery(item.id)}
        >
          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>

      </View>
    );
  };

  return (
    <FlatList
      data={groceries}
      keyExtractor={(item) => item.id}
      renderItem={renderGrocery}
      showsVerticalScrollIndicator={false}

      contentContainerStyle={
        groceries.length === 0
          ? styles.emptyList
          : styles.listContent
      }

      ListEmptyComponent={
        <View style={styles.emptyContainer}>

          <Text style={styles.emptyIcon}>🛍️</Text>

          <Text style={styles.emptyTitle}>
            Your grocery list is empty
          </Text>

          <Text style={styles.emptyText}>
            Add your first grocery item above.
          </Text>

        </View>
      }
    />
  );
}