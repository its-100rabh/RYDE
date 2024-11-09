import { Redirect } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  const { isSignedIn } = useAuth();

  if (isSignedIn) {
    return <Redirect href="/(root)/(tabs)/home" />;
  }
  // @ts-ignore
  return <Redirect href="/(auth)/welcome" />;
};

export default Home;
