import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    paddingHorizontal: 20,
  },

  header: {
    paddingTop: 30,
    paddingBottom: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#222",
  },

  subtitle: {
    fontSize: 15,
    color: "#777",
    marginTop: 5,
  },

  inputContainer: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 15,
  },

  input: {
    flex: 1,
    height: 50,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 12,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#222",
  },

  addButton: {
    height: 50,
    paddingHorizontal: 20,
    borderRadius: 12,
    backgroundColor: "#4CAF50",
    justifyContent: "center",
    alignItems: "center",
  },

  addButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  counterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  counterText: {
    color: "#666",
    fontSize: 14,
    fontWeight: "600",
  },

  listContent: {
    paddingBottom: 30,
  },

  groceryRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,

    elevation: 2,

    shadowOffset: {
      width: 0,
      height: 1,
    },

    shadowOpacity: 0.1,
    shadowRadius: 3,
  },

  groceryInfo: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  checkbox: {
    width: 25,
    height: 25,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: "#4CAF50",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  checkboxCompleted: {
    backgroundColor: "#4CAF50",
  },

  checkmark: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  groceryText: {
    fontSize: 17,
    color: "#333",
    flex: 1,
  },

  completedText: {
    textDecorationLine: "line-through",
    color: "#999",
  },

  deleteButton: {
    backgroundColor: "#FFE5E5",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginLeft: 10,
  },

  deleteText: {
    color: "#D32F2F",
    fontWeight: "bold",
    fontSize: 13,
  },

  emptyList: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  emptyContainer: {
    alignItems: "center",
    paddingBottom: 100,
  },

  emptyIcon: {
    fontSize: 55,
    marginBottom: 15,
  },

  emptyTitle: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#444",
  },

  emptyText: {
    fontSize: 14,
    color: "#888",
    marginTop: 5,
  },

});

export default styles;
