// SplashScreen.js
import React, { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";

const SplaceScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Home");
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/Kinda-HRMS__Logo.png")}
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff", // Change background color if needed
  },
  logo: {
    width: 400,
    height: 400, // Adjust logo size as needed
    resizeMode: "contain",
  },
});

export default SplaceScreen;
