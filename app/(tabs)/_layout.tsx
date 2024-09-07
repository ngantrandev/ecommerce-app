import { Tabs, useNavigation } from 'expo-router';
import { memo } from 'react';
import { Text, View } from 'react-native';

import Button from '~/components/button';
import BellIcon from '~/components/vectors/bell';
import MyTabbar from '~/components/tabbar';
import AccountIcon from '~/components/vectors/account';
import CartIcon from '~/components/vectors/cart';
import HeartIcon from '~/components/vectors/heart';
import HomeIcon from '~/components/vectors/home';
import SearchIcon from '~/components/vectors/search';
import { Colors } from '~/constants/Colors';

const HomeHeader = memo(function Header() {
  const navigation = useNavigation();

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

      <Button
        textonly
        activeOpacity={0.5}
        onPress={() => {
          navigation.navigate('notification');
        }}
      >
        <BellIcon color={Colors.light.primary[900]} />
      </Button>
    </View>
  );
});

export default memo(function HomeLayout() {
  return (
    <Tabs
      sceneContainerStyle={{
        backgroundColor: Colors.light.primary[0],
        paddingHorizontal: 24,
      }}
      screenOptions={{}}
      tabBar={(props) => <MyTabbar {...props} />}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          header(props) {
            return <HomeHeader {...props} />;
          },

          tabBarIcon(props) {
            return <HomeIcon {...props} />;
          },
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon(props) {
            return <SearchIcon {...props} />;
          },
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: 'Saved',
          tabBarIcon(props) {
            return <HeartIcon {...props} />;
          },
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: 'Cart',
          tabBarIcon(props) {
            return <CartIcon {...props} />;
          },
        }}
      />
      <Tabs.Screen
        name="(accounts)"
        options={{
          title: 'Account',
          headerShown: false,

          tabBarIcon(props) {
            return <AccountIcon {...props} opacity={0} />;
          },
        }}
      />
    </Tabs>
  );
});
