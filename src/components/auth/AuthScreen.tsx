import type { ReactNode } from "react";
import { ScrollView, Text, View } from "react-native";

type AuthScreenProps = {
  title: string;
  children: ReactNode;
  footer?: ReactNode;
};

export function AuthScreen({ title, children, footer }: AuthScreenProps) {
  return (
    <ScrollView
      contentContainerClassName="flex-grow justify-center gap-5 p-6"
      keyboardShouldPersistTaps="handled"
    >
      <Text className="text-center text-3xl font-bold text-gray-900">{title}</Text>
      <View className="gap-3">{children}</View>
      {footer ? <View>{footer}</View> : null}
    </ScrollView>
  );
}
