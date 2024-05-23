// import { View, Text } from "react-native";
// import React from "react";

// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import Banner from "../Banner";
// import Input from "../Input";
// const Stack = createStackNavigator();

// const HomeScreen = () => {
//   return (
//     <>
//       <Stack.Navigator>
//
//         <Stack.Screen name="Home" component={Input} />
//
//         <Stack.Screen name="Details" component={Banner} />
//
//       </Stack.Navigator>
//     </>
//   );
// };

// export default HomeScreen;
import * as React from "react";
import { Button, View, Text } from "react-native";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screennn</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}

export default HomeScreen;
