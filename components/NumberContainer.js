import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";

const NumberContainer = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children} </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: colors.secondary,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    justifyContent: "center",
    alignItems:"center"
  },
  number: {
    color: colors.secondary,
    fontSize: 22,
  },
});
export default NumberContainer;
