import React from "react";
import { View, Text, ImageBackground, Pressable } from "react-native";
import styles from "./styles";

export default function index({ text, type }) {
  return (
    <View style={styles.container}>
      <Pressable
        style={type === "dark" ? styles.buttonDark : styles.buttonLight}
        onPress={() => {
          console.warn("Button clicked");
        }}
      >
        <Text style={type === "dark" ? styles.textLight : styles.textDark}>
          {text}
        </Text>
      </Pressable>
    </View>
  );
}
