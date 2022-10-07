import React from "react";
import { StyleSheet, Text } from "react-native";

const OpenSansBoldText = (props) => {
  return <Text style={styles.OpenSansText}>{props.children}</Text>;
};
const styles = StyleSheet.create({
  OpenSansText: {
    fontFamily: "open-sans-bold",
  },
});
export default OpenSansBoldText;
