import React from "react";
import { Dimensions, FlatList, Text, View } from "react-native";
import styles from "./styles";
import cars from "./cars";
import CarItem from "../CarItem";

export default function CarsList() {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({ item }) => <CarItem car={item} />}
        showsHorizontalScrollIndicator={false}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
      />
    </View>
  );
}
