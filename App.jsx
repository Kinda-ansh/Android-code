// import * as React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import HomeScreen from "./components/screens/HomeScreen";
// import DetailsScreen from "./components/screens/DetailsScreen";
// import Ansh from "./components/Ansh";

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Details" component={DetailsScreen} />
//         <Stack.Screen name="Info" component={Ansh} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SplashScreen from "./components/screens/SplaceScreen";
import { Button, Text, View } from "react-native";
// import HomeScreenMain from "./components/HomeScreenMain";
import Table from "./components/Table";

const Stack = createStackNavigator();

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Welcome to KINDA SOULUTIONS"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}

function InfoScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: "10px",
      }}
    >
      <Text>Info Screen</Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate("Table")}
      />
      <Button
        title="Go To Home"
        onPress={() => navigation.navigate("Home")}
        style={{ paddingTop: "10px" }}
      />
    </View>
  );
}

function App() {
  return (
    <>
      {/* <HomeScreenMain /> */}
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={DetailsScreen}
            // options={{ headerShown: false }}
          />

          <Stack.Screen name="Details" component={InfoScreen} />
          <Stack.Screen name="Table" component={Table} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
