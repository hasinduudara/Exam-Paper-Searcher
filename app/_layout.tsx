import { View } from 'react-native';
import { Stack } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import "../global.css";

export default function RootLayout() {
  const insets = useSafeAreaInsets();

  return (
      <View
          style={{
            flex: 1,
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            backgroundColor: 'white',
          }}
      >
        <StatusBar style="dark" />

        <Stack screenOptions={{
          headerShown: false
        }} />
      </View>
  );
}