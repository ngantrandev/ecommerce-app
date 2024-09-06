import { Stack } from 'expo-router';

import { Colors } from '~/constants/Colors';

export default function AccountLayout() {
  return (
    <Stack
      screenOptions={{
        contentStyle: {
          backgroundColor: Colors.light.primary[0],
          paddingHorizontal: 24,
        },
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
}
