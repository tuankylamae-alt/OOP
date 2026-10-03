import React from "react";
import { Text, View } from "react-native";
import styles from "../styles/dashboardStyles";

export default function TransactionItem({
  icon,
  title,
  date,
  amount,
  positive,
}) {
  return (
    <View style={styles.transaction}>
      <View style={styles.transactionIcon}>
        <Text style={styles.transactionEmoji}>
          {icon}
        </Text>
      </View>

      <View style={styles.transactionInfo}>
        <Text style={styles.transactionTitle}>
          {title}
        </Text>

        <Text style={styles.transactionDate}>
          {date}
        </Text>
      </View>

      <Text
        style={[
          styles.transactionAmount,
          positive && styles.incomeAmount,
        ]}
      >
        {amount}
      </Text>
    </View>
  );
}