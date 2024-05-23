import * as React from "react";
import { StyleSheet, View } from "react-native";
import { TextInput } from "react-native-paper";

const Input = () => {
  const [text, setText] = React.useState("");

  return (
    <View style={styles.cardstyle}>
      <TextInput
        mode="outlined"
        label="Your Name"
        placeholder="Type something"
        right={<TextInput.Affix />}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  cardstyle: {
    paddingHorizontal: 5,
    margin: 5,
  },
});
