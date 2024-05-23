import * as React from "react";
import { Button, View, Text } from "react-native";

function NavButton({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Page for home screen</Text>
      <Button title="Details" onPress={() => navigation.navigate("Details")} />
    </View>
  );
}

export default NavButton;
