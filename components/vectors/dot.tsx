import { StyleProp, View, ViewStyle } from 'react-native';
import React from 'react';

import { Colors } from '~/constants/Colors';

export default function DotIcon({
  size = 4,
  color = Colors.light.primary[500],
  style,
}: {
  size?: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <View
      style={[
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: color,
        },
        style,
      ]}
    />
  );
}
