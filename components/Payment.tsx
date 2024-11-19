import React, { useEffect, useState } from "react";
import { CustomButton } from "./CustomButton";
import { PaymentSheetError, useStripe } from "@stripe/stripe-react-native";
import { View, Button, Alert } from "react-native";

const Payment = () => {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [success, setSuccess] = useState(false);

  const initializePaymentSheet = async () => {
    const { error } = await initPaymentSheet({
      merchantDisplayName: "Example, Inc.",
      intentConfiguration: {
        mode: {
          amount: 1099,
          currencyCode: "USD",
        },
        confirmHandler: confirmHandler,
      },
    });
    if (error) {
      // handle error
    }
  };

  useEffect(() => {
    initializePaymentSheet();
  }, []);

  const confirmHandler = async (
    paymentMethod,
    shouldSavePaymentMethod,
    intentCreationCallback
  ) => {
    // explained later
  };

  const openPaymentSheet = async () => {
    await initializePaymentSheet();
    const { error } = await presentPaymentSheet();

    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      setSuccess(true);
    }
  };
  return (
    <>
      <CustomButton
        title="Confirm Ride"
        className="my-5"
        onPress={openPaymentSheet}
      />
    </>
  );
};

export default Payment;
