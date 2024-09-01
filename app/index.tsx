import { Colors } from '@/constants/Colors';
import { useState } from 'react';
import { StatusBar, StatusBarStyle, Text, useColorScheme, View } from 'react-native';

export default function Index() {
  const colorScheme = useColorScheme();

  const [statusBarStyle, setStatusBarStyle] = useState<StatusBarStyle>('dark-content');
  const [statusBarTransition, setStatusBarTransition] = useState<'fade' | 'none' | 'slide' | null>(
    'fade'
  );
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor={Colors.light.text}
        barStyle={statusBarStyle}
        showHideTransition={statusBarTransition}
        hidden={false}
      />

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>Edit app/index.tsx to edit this screen.</Text>
      </View>
    </>
  );
}
