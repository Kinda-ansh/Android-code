import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

const Cardx = () => {
  return (
    <View>
      <Text style={styles.headingText}>AnotherCard</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Cardx;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 8,
  },
  container: {
    padding: 8,
    flexDirection: "row",
  },
  card: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    margin: 8,
    width: 200,
    height: 250,
  },
  cardElevated: {
    backgroundColor: "#BBD8E2",
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: "#333",
  },
});
