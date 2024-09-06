import { Tabs } from 'expo-router';
import { memo } from 'react';
import { Text, View } from 'react-native';

import Button from '~/components/button';
import Bell from '~/components/vectors/bell';
import { Colors } from '~/constants/Colors';

const Header = memo(function Header() {
  return (
    <View
      style={{
        width: '100%',
        height: 'auto',
        marginTop: 12,
        marginBottom: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <Text
        style={{
          color: Colors.light.primary[900],
          fontSize: 40,
          fontWeight: 'bold',
        }}
      >
        Discover
      </Text>

      <Button textonly activeOpacity={0.5}>
        <Bell />
      </Button>
    </View>
  );
});

export default function HomeLayout() {
  return (
    <Tabs
      sceneContainerStyle={{
        backgroundColor: Colors.light.primary[0],
        paddingHorizontal: 24,
      }}
      screenOptions={{}}
    >
      <Tabs.Screen
        name="index"
        options={{
          header(props) {
            return <Header {...props} />;
          },
        }}
      />
      <Tabs.Screen name="search" />
      <Tabs.Screen name="saved" />
      <Tabs.Screen name="cart" />
      <Tabs.Screen
        name="(accounts)"
        options={{
          title: 'Account',
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
