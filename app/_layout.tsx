import { router, Stack } from 'expo-router';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native';

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
      // const initialRoute = routeNames.search;
      // const initialRoute = '(tabs)/saved';
      // const initialRoute = '(tabs)/(carts)';
      const initialRoute = '(tabs)';
      router.push(initialRoute);
    }
  }, [boarded]);

  if (boarded === null) {
    return null; // Có thể hiển thị loading screen ở đây nếu cần
  }

  return (
    <Stack
      screenOptions={{
        headerTransparent: true,
        headerStyle: {
          backgroundColor: Colors.light.primary[0],
        },

        headerTitle(props) {
          return (
            <View
              style={{
                height: 'auto',
                // padding: 16,
              }}
              {...props}
            >
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: 'bold',
                }}
              >
                {props.children}
              </Text>
            </View>
          );
        },

        title: 'Ecommerce App',
        headerTitleAlign: 'center',
        headerShown: false,
        statusBarColor: Colors.light.primary[0],

        statusBarStyle: 'dark',
        contentStyle: {
          backgroundColor: Colors.light.primary[0],
          marginHorizontal: 24,
          marginTop: 60,
        },
      }}
    >
      <Stack.Screen name={routeNames.onboarding} />
      <Stack.Screen
        name={routeNames.homeTabs}
        options={{
          contentStyle: {
            marginHorizontal: 0,
          },
        }}
      />
      <Stack.Screen
        name={routeNames.register}
        options={{
          contentStyle: {
            backgroundColor: Colors.light.primary[0],
            marginTop: 0,
            marginHorizontal: 24,
            paddingBottom: 24,
          },
        }}
      />
      <Stack.Screen name={routeNames.signin} options={{
        contentStyle:{
          backgroundColor: Colors.light.primary[0],
          marginTop: 0,
          marginHorizontal: 24,
          paddingBottom: 24,
        }
      }} />
      <Stack.Screen
        name={routeNames.notification}
        options={{
          title: 'Notification',
          headerShown: true,
        }}
      />

      <Stack.Screen
        name="products/[id]"
        options={{
          title: 'Product Detail',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="reviews/[id]"
        options={{
          title: 'Reviews',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="checkout"
        options={{
          title: 'Checkout',
          headerShown: true,
        }}
      />
    </Stack>
  );
}
