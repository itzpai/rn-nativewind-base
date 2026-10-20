import { useAuth } from "@clerk/expo";
import { Redirect, Stack } from "expo-router";
import { Text } from "react-native";

export default function AuthRouteLayout() {
  const { isSignedIn, isLoaded } = useAuth({ treatPendingAsSignedOut: false });
  if (!isLoaded) {
    return <Text>Loading...</Text>;
  }
  if (isSignedIn) {
    return <Redirect href="/(home)" />;
  }
  return <Stack screenOptions={{ headerShown: false }} />;
}
