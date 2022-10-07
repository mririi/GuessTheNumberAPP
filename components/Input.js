import { StyleSheet, TextInput } from "react-native";

const Input = props => {
  return (<TextInput
  {...props} //by doing this we can add props whenever we call this component
  style={{ ...styles.input, ...props.style }} />);
};
const styles = StyleSheet.create ({
  input: {
    height: 30,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
})
export default Input;
