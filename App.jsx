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
import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Go to Info" onPress={() => navigation.navigate("Info")} />
    </View>
  );
}

function InfoScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Info Screen</Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate("Setting")}
      />
    </View>
  );
}

function Setting({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Setting Screen</Text>
      <Button
        title="Welcome to setting"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}

const DetailsStack = createStackNavigator();

function DetailsStackScreen() {
  return (
    <DetailsStack.Navigator>
      <DetailsStack.Screen name="Details" component={DetailsScreen} />
      <DetailsStack.Screen name="Info" component={InfoScreen} />
      <DetailsStack.Screen name="Setting" component={Setting} />
    </DetailsStack.Navigator>
  );
}

const RootStack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="DetailsStack">
        <RootStack.Screen
          name="DetailsStack"
          component={DetailsStackScreen}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
