import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { userLocationStore } from "@/store";

const FindRide = () => {
  const {
    userAddress,
    destinationAddress,
    setDestinationLocation,
    setUserLocation,
  } = userLocationStore();
  return (
    <View>
      <Text className="text-2xl">You are here: {userAddress}</Text>
      <Text className="text-2xl">
        You want to go here: {destinationAddress}
      </Text>
    </View>
  );
};

export default FindRide;
