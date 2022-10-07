import React from "react";
import { Text, View,StyleSheet } from "react-native";
import OpenSansBoldText from "./OpenSansBoldText";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <OpenSansBoldText style={styles.headerTitle}>{props.title}</OpenSansBoldText>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop:36,
    backgroundColor: '#f7287b',
    alignItems: 'center',
    justifyContent:'center'
  },
  headerTitle: {
    color:'black',
    fontSize: 18,
  },
});

export default Header;
