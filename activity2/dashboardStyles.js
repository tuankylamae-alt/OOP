import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F7FB",
  },

  header: {
    paddingHorizontal: 22,
    paddingTop: 20,
    paddingBottom: 22,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  greeting: {
    color: "#8C8F9A",
    fontSize: 13,
  },

  name: {
    color: "#191B26",
    fontSize: 27,
    fontWeight: "800",
    marginTop: 3,
  },

  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#4F46E5",
    justifyContent: "center",
    alignItems: "center",
  },

  avatarText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },

  balanceCard: {
    marginHorizontal: 20,
    padding: 24,
    borderRadius: 25,
    backgroundColor: "#4F46E5",
  },

  balanceLabel: {
    color: "#C9C7FF",
    fontSize: 13,
  },

  balance: {
    color: "#FFFFFF",
    fontSize: 34,
    fontWeight: "800",
    marginTop: 7,
  },

  balanceBottom: {
    marginTop: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  balanceSmall: {
    color: "#C9C7FF",
    fontSize: 11,
  },

  income: {
    color: "#6EE7A0",
    fontSize: 15,
    fontWeight: "700",
    marginTop: 4,
  },

  arrowButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#6259E9",
    justifyContent: "center",
    alignItems: "center",
  },

  arrow: {
    color: "#FFFFFF",
    fontSize: 20,
  },

  sectionTitle: {
    color: "#191B26",
    fontSize: 18,
    fontWeight: "700",
  },

  sectionHeader: {
    marginHorizontal: 20,
    marginTop: 26,
    marginBottom: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  month: {
    color: "#858895",
    fontSize: 12,
  },

  quickActions: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 10,
  },

  quickAction: {
    width: 75,
    alignItems: "center",
  },

  quickIcon: {
    width: 54,
    height: 54,
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
  },

  quickIconText: {
    color: "#4F46E5",
    fontSize: 23,
  },

  quickLabel: {
    color: "#666976",
    fontSize: 11,
    marginTop: 8,
    textAlign: "center",
  },

  statsRow: {
    flexDirection: "row",
    gap: 12,
    paddingHorizontal: 20,
  },

  statCard: {
    flex: 1,
    padding: 17,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
  },

  statIcon: {
    width: 38,
    height: 38,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },

  statLabel: {
    color: "#888B96",
    fontSize: 12,
  },

  statAmount: {
    color: "#20222D",
    fontSize: 20,
    fontWeight: "800",
    marginTop: 4,
  },

  change: {
    fontSize: 11,
    fontWeight: "700",
    marginTop: 5,
  },

  spendingCard: {
    marginHorizontal: 20,
    padding: 18,
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
  },

  progressBackground: {
    height: 10,
    borderRadius: 10,
    backgroundColor: "#E8E9F0",
    overflow: "hidden",
  },

  progress: {
    width: "63%",
    height: "100%",
    backgroundColor: "#4F46E5",
    borderRadius: 10,
  },

  progressInfo: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  progressPercent: {
    color: "#4F46E5",
    fontSize: 12,
    fontWeight: "700",
  },

  remaining: {
    color: "#888B96",
    fontSize: 12,
  },

  seeAll: {
    color: "#4F46E5",
    fontSize: 12,
    fontWeight: "600",
  },

  transaction: {
    marginHorizontal: 20,
    marginBottom: 10,
    padding: 15,
    borderRadius: 17,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
  },

  transactionIcon: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: "#F1F2F7",
    justifyContent: "center",
    alignItems: "center",
  },

  transactionEmoji: {
    fontSize: 19,
  },

  transactionInfo: {
    flex: 1,
    marginLeft: 13,
  },

  transactionTitle: {
    color: "#242631",
    fontSize: 14,
    fontWeight: "700",
  },

  transactionDate: {
    color: "#9699A5",
    fontSize: 10,
    marginTop: 4,
  },

  transactionAmount: {
    color: "#242631",
    fontSize: 13,
    fontWeight: "700",
  },

  incomeAmount: {
    color: "#27A866",
  },

  summaryButton: {
    marginHorizontal: 20,
    marginTop: 18,
    height: 54,
    borderRadius: 17,
    backgroundColor: "#191B26",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  summaryText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "700",
  },

  summaryArrow: {
    color: "#FFFFFF",
    fontSize: 18,
    marginLeft: 9,
  },
});