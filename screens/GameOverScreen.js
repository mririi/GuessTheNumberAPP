import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import OpenSansBoldText from "../components/OpenSansBoldText";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/gameover.png")}
        />
      </View>
      <OpenSansBoldText>Game Over !</OpenSansBoldText>
      <OpenSansBoldText>Number Of Rounds : {props.roundsNum} </OpenSansBoldText>
      <OpenSansBoldText>Number was : {props.userNumber}</OpenSansBoldText>
      <Button title="NEW GAME!" onPress={props.onRestart} />
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
export default GameOverScreen;
