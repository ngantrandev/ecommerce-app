import { router } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import Button from '~/components/button';
import routeNames from '~/configs/routes';
import { Colors } from '~/constants/Colors';
import { DataKeyNames } from '~/constants/keyNames';
import { setItem } from '~/helpers/asyncStorage';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Index page</Text>
      <Button
        style={{}}
        activeOpacity={0.8}
        onPress={async () => {
          await setItem(DataKeyNames.onboarded, 'false');
          router.push(routeNames.onboarding);
        }}
      >
        <Text style={styles.text}>Reset</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Colors.light.primary[0],
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
