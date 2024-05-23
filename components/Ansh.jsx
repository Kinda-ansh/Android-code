import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Ansh = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text> Screennn</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Info")}
      />
    </View>
  );
};

export default Ansh;

const styles = StyleSheet.create({});
