import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Carousel } from "react-native-auto-carousel";
import { Dimensions, Image } from "react-native";
import img from "../assets/Kinda-HRMS__Logo.png";
import { ScrollView } from "react-native-gesture-handler";

const DEVICE_WIDTH = Dimensions.get("window").width;
const IMAGES = ["Hio", "Ko"];

const HomeCarousel = () => {
  return (
    <ScrollView>
      <Text>HomeCarousel</Text>
      <Carousel
        data={IMAGES}
        renderItem={({ item }) => (
          <Image
            key={item}
            source={{ uri: item }}
            style={{
              height: 100,
              width: DEVICE_WIDTH,
            }}
          />
        )}
      />
    </ScrollView>
  );
};

export default HomeCarousel;

// import React from "react";
// import { View, Text, Dimensions, Image, StyleSheet } from "react-native";
// import Carousel from "react-native-snap-carousel";

// const DEVICE_WIDTH = Dimensions.get("window").width;
// const IMAGES = [
//   "https://images.pexels.com/photos/24304598/pexels-photo-24304598/free-photo-of-passersby-between-the-colonnades-of-the-arcade.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
//   "https://images.pexels.com/photos/23719481/pexels-photo-23719481/free-photo-of-chrysanthemum-flower.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
//   "https://images.pexels.com/photos/24372291/pexels-photo-24372291/free-photo-of-two-birds-perched-on-top-of-a-fence.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
// ];

// const HomeCarousel = () => {
//   const renderItem = ({ item }) => (
//     <View style={styles.carouselItem}>
//       <Image
//         source={{ uri: item }}
//         style={styles.image}
//       />
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>HomeCarousel</Text>
//       <Carousel
//         data={IMAGES}
//         renderItem={renderItem}
//         sliderWidth={DEVICE_WIDTH}
//         itemWidth={DEVICE_WIDTH * 0.8}
//         loop={true}
//         autoplay={true}
//         autoplayDelay={500}
//         autoplayInterval={3000}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 10,
//   },
//   carouselItem: {
//     backgroundColor: 'white',
//     borderRadius: 8,
//     overflow: 'hidden',
//     elevation: 5, // Adds shadow effect for Android
//   },
//   image: {
//     width: '100%',
//     height: 200,
//   },
// });

// export default HomeCarousel;
