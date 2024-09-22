import { View } from 'react-native';
import React from 'react';

import { Colors } from '~/constants/Colors';

export default function RadioView({
  active,
  activeColor = Colors.light.primary[900],
  unActiveColor = Colors.light.primary[200],
}: {
  active: boolean;
  activeColor?: string;
  unActiveColor?: string;
}) {
  return (
    <View
      style={{
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: active ? activeColor : unActiveColor,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          width: 12,
          height: 12,
          borderRadius: 6,
          backgroundColor: active ? activeColor : 'transparent',
        }}
      />
    </View>
  );
}
