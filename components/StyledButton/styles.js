import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
  },
  buttonDark: {
    backgroundColor: "#171A20",
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonLight: {
    backgroundColor: "white",
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  textLight: {
    fontSize: 12,
    fontWeight: "500",
    textTransform: "uppercase",
    color: "white",
  },
  textDark: {
    fontSize: 12,
    fontWeight: "500",
    textTransform: "uppercase",
    color: "black",
  },
});

export default styles;
