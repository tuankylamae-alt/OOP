import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function BalanceCard({
  balance = 0,
  currency = "₱",
  title = "Total Balance",
}) {
  const formattedBalance = Number(balance).toLocaleString("en-PH", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>

        <View style={styles.statusDot} />
      </View>

      <Text style={styles.balance}>
        {currency}
        {formattedBalance}
      </Text>

      <View style={styles.footer}>
        <View>
          <Text style={styles.footerLabel}>Available Balance</Text>
          <Text style={styles.footerValue}>
            {currency}
            {formattedBalance}
          </Text>
        </View>

        <View style={styles.currencyBadge}>
          <Text style={styles.currencyText}>PHP</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginVertical: 12,
    padding: 22,
    borderRadius: 20,
    backgroundColor: "#2563EB",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 6,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  title: {
    color: "#E0EAFF",
    fontSize: 15,
    fontWeight: "500",
  },

  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#4ADE80",
  },

  balance: {
    marginTop: 10,
    color: "#FFFFFF",
    fontSize: 34,
    fontWeight: "700",
    letterSpacing: 0.5,
  },

  footer: {
    marginTop: 24,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: "rgba(255,255,255,0.2)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  footerLabel: {
    color: "#BFDBFE",
    fontSize: 12,
  },

  footerValue: {
    marginTop: 3,
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "600",
  },

  currencyBadge: {
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 10,
    backgroundColor: "rgba(255,255,255,0.15)",
  },

  currencyText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "700",
  },
});
