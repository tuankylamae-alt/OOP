import React from "react";
import { Text, View } from "react-native";
import styles from "../styles/dashboardStyles";

export default function StatCard({
  icon,
  label,
  amount,
  change,
  color,
  background,
}) {
  return (
    <View style={styles.statCard}>
      <View
        style={[
          styles.statIcon,
          { backgroundColor: background },
        ]}
      >
        <Text style={{ color, fontSize: 19 }}>
          {icon}
        </Text>
      </View>

      <Text style={styles.statLabel}>{label}</Text>
      <Text style={styles.statAmount}>{amount}</Text>

      <Text style={[styles.change, { color }]}>
        {change}
      </Text>
    </View>
  );
}