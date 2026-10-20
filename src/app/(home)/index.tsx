import { useUser } from "@clerk/expo";
import { UserButton } from "@clerk/expo-native-components";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, StyleSheet, Text, View, useColorScheme } from "react-native";

export default function HomeScreen() {
  const { user } = useUser();
  const isDark = useColorScheme() === "dark";
  const colors = isDark
    ? {
        background: "#0B0B0F",
        surface: "#15151C",
        border: "#282832",
        text: "#FFFFFF",
        secondary: "#A1A1AA",
        primary: "#8B6FFF",
        tint: "#211A38",
      }
    : {
        background: "#F8F8FB",
        surface: "#FFFFFF",
        border: "#E9E8EF",
        text: "#17171D",
        secondary: "#6B6B76",
        primary: "#6C47FF",
        tint: "#F0ECFF",
      };

  const name = user?.firstName ?? user?.username ?? "there";
  const email = user?.primaryEmailAddress?.emailAddress;

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background }]}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View>
            <Text style={[styles.eyebrow, { color: colors.secondary }]}>YOUR ACCOUNT</Text>
            <Text style={[styles.headerTitle, { color: colors.text }]}>Home</Text>
          </View>
          <View style={styles.userButton}>
            <UserButton />
          </View>
        </View>

        <View style={styles.welcome}>
          <View style={[styles.statusPill, { backgroundColor: colors.tint }]}>
            <View style={[styles.statusDot, { backgroundColor: colors.primary }]} />
            <Text style={[styles.statusText, { color: colors.primary }]}>SIGNED IN</Text>
          </View>
          <Text style={[styles.title, { color: colors.text }]}>Welcome back, {name}</Text>
          <Text style={[styles.subtitle, { color: colors.secondary }]}>
            You’re all set. Your account is ready to use.
          </Text>
        </View>

        <View style={[styles.accountCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          <View style={styles.cardHeading}>
            <View style={[styles.cardMark, { backgroundColor: colors.tint }]}>
              <View style={[styles.cardMarkInner, { backgroundColor: colors.primary }]} />
            </View>
            <View style={styles.cardHeadingText}>
              <Text style={[styles.cardTitle, { color: colors.text }]}>Your account</Text>
              <Text style={[styles.cardCaption, { color: colors.secondary }]}>Managed securely with Clerk</Text>
            </View>
          </View>

          <View style={[styles.divider, { backgroundColor: colors.border }]} />

          <Text style={[styles.fieldLabel, { color: colors.secondary }]}>SIGNED IN AS</Text>
          <Text style={[styles.accountName, { color: colors.text }]} numberOfLines={1}>
            {user?.fullName ?? name}
          </Text>
          {email ? (
            <Text style={[styles.email, { color: colors.secondary }]} numberOfLines={1}>
              {email}
            </Text>
          ) : null}
        </View>

        <Text style={[styles.footer, { color: colors.secondary }]}>
          Tap your profile photo to manage your profile and security settings.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 32,
  },
  header: {
    minHeight: 52,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  eyebrow: {
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 1.2,
  },
  headerTitle: {
    marginTop: 3,
    fontSize: 18,
    fontWeight: "600",
  },
  userButton: {
    minWidth: 44,
    minHeight: 44,
    alignItems: "center",
    justifyContent: "center",
  },
  welcome: {
    marginTop: 48,
    marginBottom: 28,
  },
  statusPill: {
    alignSelf: "flex-start",
    minHeight: 30,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 999,
    paddingHorizontal: 11,
    gap: 7,
  },
  statusDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
  },
  statusText: {
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 0.8,
  },
  title: {
    marginTop: 18,
    fontSize: 30,
    lineHeight: 38,
    fontWeight: "700",
    letterSpacing: -0.8,
  },
  subtitle: {
    marginTop: 8,
    fontSize: 15,
    lineHeight: 22,
  },
  accountCard: {
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 20,
    padding: 20,
  },
  cardHeading: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardMark: {
    width: 42,
    height: 42,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  cardMarkInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  cardHeadingText: {
    flex: 1,
    marginLeft: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  cardCaption: {
    marginTop: 3,
    fontSize: 13,
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    marginVertical: 20,
  },
  fieldLabel: {
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 0.8,
  },
  accountName: {
    marginTop: 8,
    fontSize: 17,
    fontWeight: "600",
  },
  email: {
    marginTop: 4,
    fontSize: 14,
  },
  footer: {
    marginTop: 18,
    paddingHorizontal: 4,
    fontSize: 13,
    lineHeight: 19,
    textAlign: "center",
  },
});
