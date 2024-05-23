// SplashScreen.js
import React, { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";

const SplaceScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Home"); // Replace 'Home' with your main screen
    }, 2000); // Duration of splash screen
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/Kinda-HRMS__Logo.png")} // Replace with your logo path
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
    width: 200,
    height: 200, // Adjust logo size as needed
    resizeMode: "contain",
  },
});

export default SplaceScreen;
