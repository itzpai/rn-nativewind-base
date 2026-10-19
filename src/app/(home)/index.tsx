import { Show, useClerk, useUser } from "@clerk/expo";
import { UserButton } from "@clerk/expo-native-components";
import { Pressable, Text, View } from "react-native";

export default function HomeScreen() {
  const { user } = useUser();
  const { signOut } = useClerk();
  const greetingName =
    user?.fullName ??
    user?.username ??
    user?.primaryEmailAddress?.emailAddress ??
    user?.primaryPhoneNumber?.phoneNumber ??
    "there";

  return (
    <View className="flex-1 justify-center gap-4 bg-white p-6">
      <Text className="text-center text-3xl font-bold text-gray-900">
        Welcome home
      </Text>
      <Show when="signed-in">
        <Text>Hello, {greetingName}</Text>
        <Pressable onPress={() => signOut()}>
          <Text>Sign Out</Text>
        </Pressable>
        <View className="items-center">
          <UserButton />
        </View>
      </Show>
    </View>
  );
}
