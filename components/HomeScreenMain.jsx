import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { IconButton } from "react-native-paper";
import Table from "./Table";
import Popup from "./Popup";

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
      <Button title="Go Back" onPress={() => navigation.navigate("Details")} />
    </View>
  );
}

const DetailsStack = createStackNavigator();

function DetailsStackScreen() {
  return (
    <DetailsStack.Navigator>
      <DetailsStack.Screen name="Details" component={DetailsScreen} />
      <DetailsStack.Screen name="Info" component={InfoScreen} />
      <DetailsStack.Screen name="Table" component={Table} />
      <DetailsStack.Screen name="Setting" component={Setting} />
      <DetailsStack.Screen name="Data" component={Popup} />
    </DetailsStack.Navigator>
  );
}

const RootStack = createStackNavigator();

function HomeScreenMain() {
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

export default HomeScreenMain;
