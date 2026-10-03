import React from "react";
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

import BalanceCard from "./components/BalancedCard";
import QuickActions from "./components/QuickActions";
import StatCard from "./components/StatCard";
import TransactionItem from "./components/TransactionItem";
import styles from "./styles/dashboardStyles";

export default function Dashboard() {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Good morning,</Text>
          <Text style={styles.name}>Mae 👋</Text>
        </View>

        <View style={styles.avatar}>
          <Text style={styles.avatarText}>M</Text>
        </View>
      </View>

      {/* Balance */}
      <BalanceCard />

      {/* Quick Actions */}
      <Text style={styles.sectionTitle}>Quick Actions</Text>
      <QuickActions />

      {/* Monthly Overview */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Monthly Overview</Text>
        <Text style={styles.month}>September</Text>
      </View>

      <View style={styles.statsRow}>
        <StatCard
          icon="↗"
          label="Income"
          amount="₱28,450"
          change="+12.5%"
          color="#27A866"
          background="#E8F8EF"
        />

        <StatCard
          icon="↘"
          label="Expenses"
          amount="₱12,680"
          change="-4.8%"
          color="#E05C5C"
          background="#FFF0F0"
        />
      </View>

      {/* Spending */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Spending Limit</Text>
        <Text style={styles.month}>₱12,680 / ₱20,000</Text>
      </View>

      <View style={styles.spendingCard}>
        <View style={styles.progressBackground}>
          <View style={styles.progress} />
        </View>

        <View style={styles.progressInfo}>
          <Text style={styles.progressPercent}>63% used</Text>
          <Text style={styles.remaining}>₱7,320 remaining</Text>
        </View>
      </View>

      {/* Transactions */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Recent Transactions</Text>

        <TouchableOpacity>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>

      <TransactionItem
        icon="🛒"
        title="Grocery Shopping"
        date="Today • 10:32 AM"
        amount="-₱850.00"
      />

      <TransactionItem
        icon="💼"
        title="Salary"
        date="Yesterday • 9:00 AM"
        amount="+₱25,000.00"
        positive
      />

      <TransactionItem
        icon="☕"
        title="Coffee Shop"
        date="Yesterday • 4:20 PM"
        amount="-₱180.00"
      />

      <TransactionItem
        icon="🚕"
        title="Transportation"
        date="Sep 22 • 7:45 PM"
        amount="-₱320.00"
      />

      <TouchableOpacity style={styles.summaryButton}>
        <Text style={styles.summaryText}>
          View Financial Summary
        </Text>
      </TouchableOpacity>

      <View style={{ height: 35 }} />
    </ScrollView>
  );
}