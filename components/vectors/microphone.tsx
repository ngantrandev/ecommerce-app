import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { G, Path, Svg } from 'react-native-svg';

import { Colors } from '~/constants/Colors';

type Props = {
  style?: StyleProp<ViewStyle>;
  size?: number;
  color?: string;
};

export default function Microphone({ style, size, color = Colors.light.primary[300] }: Props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      style={[
        {
          aspectRatio: 1,
          width: size || 24,
          height: size || 24,
        },
        style,
      ]}
      stroke={color}
    >
      <G>
        {/* <Path d="M0 0h24v24H0z" fill="none" /> */}
        <Path
          fill={color}
          stroke={color}
          d="M12 3a3 3 0 0 0-3 3v4a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3zm0-2a5 5 0 0 1 5 5v4a5 5 0 0 1-10 0V6a5 5 0 0 1 5-5zM3.055 11H5.07a7.002 7.002 0 0 0 13.858 0h2.016A9.004 9.004 0 0 1 13 18.945V23h-2v-4.055A9.004 9.004 0 0 1 3.055 11z"
        />
      </G>
    </Svg>
  );
}
