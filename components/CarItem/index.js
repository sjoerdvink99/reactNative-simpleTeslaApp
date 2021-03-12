import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";

export default function CardItem() {
  return (
    <View style={styles.cardContainer}>
      <ImageBackground
        source={require("../../assets/images/ModelX.jpeg")}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subtitle}>Starting at €69k</Text>
      </View>
    </View>
  );
}
