import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { userLocationStore } from "@/store";
import RideLayout from "@/components/RideLayout";

const FindRide = () => {
  const {
    userAddress,
    destinationAddress,
    setDestinationLocation,
    setUserLocation,
  } = userLocationStore();
  return (
    <RideLayout>
      <Text className="text-2xl">Find Ride</Text>
      <Text className="text-2xl">Find Ride</Text>
    </RideLayout>
  );
};

export default FindRide;
