import { router, Stack } from 'expo-router';
import { useEffect, useState } from 'react';

import routeNames from '~/configs/routes';
import { Colors } from '~/constants/Colors';
import { isBoarded } from '~/helpers/manageStatus';

export const unstable_settings = {
  initialRouteName: routeNames.onboarding,
};

export default function RootLayout() {
  const [boarded, setBoarded] = useState<boolean | null>(null);

  const checkBoarded = async () => {
    const hasBoarded = await isBoarded();
    setBoarded(hasBoarded);
  };

  useEffect(() => {
    checkBoarded();
  }, []);

  useEffect(() => {
    if (boarded !== null) {
      const initialRoute = routeNames.signin;
      router.push(initialRoute);
    }
  }, [boarded]);

  if (boarded === null) {
    return null; // Có thể hiển thị loading screen ở đây nếu cần
  }

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.light.primary[0],
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        title: 'Ecommerce App',
        headerTitleAlign: 'center',
        headerShown: false,
        statusBarColor: Colors.light.primary[0],

        statusBarStyle: 'dark',
      }}
    >
      <Stack.Screen name={routeNames.onboarding} />
      <Stack.Screen name={routeNames.homeTabs} />
      <Stack.Screen name={routeNames.register} />
      <Stack.Screen name={routeNames.signin} />
    </Stack>
  );
}
