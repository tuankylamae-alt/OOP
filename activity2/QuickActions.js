import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "../styles/dashboardStyles";

const actions = [
  { icon: "＋", label: "Add Money" },
  { icon: "↗", label: "Send" },
  { icon: "↙", label: "Withdraw" },
  { icon: "•••", label: "More" },
];

export default function QuickActions() {
  return (
    <View style={styles.quickActions}>
      {actions.map((action, index) => (
        <TouchableOpacity key={index} style={styles.quickAction}>
          <View style={styles.quickIcon}>
            <Text style={styles.quickIconText}>
              {action.icon}
            </Text>
          </View>

          <Text style={styles.quickLabel}>
            {action.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
