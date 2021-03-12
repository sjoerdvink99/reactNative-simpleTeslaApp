import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";
import StyledButton from "../StyledButton";

export default function CardItem(props) {
  const { name, tagline, taglineCTA, image } = props.car;

  return (
    <View style={styles.cardContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline} <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <StyledButton text='Custom Order' type='dark' />
        <StyledButton text='Existing Inventory' type='light' />
      </View>
    </View>
  );
}
