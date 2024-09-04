import { View, Text, StyleSheet, Image } from 'react-native';
import React, { useCallback, useEffect } from 'react';
import { router, useNavigation } from 'expo-router';

import { Colors } from '~/constants/Colors';
import Button from '~/components/button';
import { setItem } from '~/helpers/asyncStorage';
import { DataKeyNames } from '~/constants/keyNames';
import routeNames from '~/configs/routes';

export default function OnBoarding() {
  const navigation = useNavigation();

  const handleStart = useCallback(async () => {
    router.push(routeNames.homeTabs);
    await setItem(DataKeyNames.onboarded, 'true');
  }, []);

  useEffect(() => {
    navigation.setOptions({ headerShown: false, navigationBarHidden: true });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Image style={styles.background} source={require('../assets/images/onboarding.png')} />
      <Button style={{}} activeOpacity={0.8} onPress={handleStart}>
        <Text style={styles.text}>Get Started</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  background: {
    width: '100%',
    flex: 1,
  },

  text: {
    color: Colors.light.primary[0],
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
