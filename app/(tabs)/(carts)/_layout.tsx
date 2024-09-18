import { Stack } from 'expo-router';

import { Colors } from '~/constants/Colors';

export default function CartLayout() {
  return (
    <Stack
      screenOptions={{
        contentStyle: {
          backgroundColor: Colors.light.primary[0],
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
