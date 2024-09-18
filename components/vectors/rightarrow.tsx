import React from 'react';
import { Path, Svg } from 'react-native-svg';

import { Colors } from '~/constants/Colors';
import { IconProps } from '~/types/styles';

export default function RightArrowIcon({
  style,
  size,
  color = Colors.light.primary[0],
}: IconProps) {
  return (
    <Svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      style={[
        {
          aspectRatio: 1,
          width: size || 24,
          height: size || 24,
        },
        style,
      ]}
    >
      <Path
        d="M5.5 12H19.5M19.5 12L12.5 5M19.5 12L12.5 19"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
