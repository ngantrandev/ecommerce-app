import { StyleProp, ViewStyle } from 'react-native';
import React from 'react';
import { Path, Svg } from 'react-native-svg';

import { Colors } from '~/constants/Colors';

type Props = {
  style?: StyleProp<ViewStyle>;
  size?: number;
  color?: string;
};

export default function SearchIcon({ style, size, color = Colors.light.primary[300] }: Props) {
  return (
    <Svg
      style={[
        {
          aspectRatio: 1,
          width: size || 30,
          height: size || 30,
        },
        style,
      ]}
      viewBox="0 0 512 512"
    >
      <Path
        fill={color}
        d="M344.5,298c15-23.6,23.8-51.6,23.8-81.7c0-84.1-68.1-152.3-152.1-152.3C132.1,64,64,132.2,64,216.3  c0,84.1,68.1,152.3,152.1,152.3c30.5,0,58.9-9,82.7-24.4l6.9-4.8L414.3,448l33.7-34.3L339.5,305.1L344.5,298z M301.4,131.2  c22.7,22.7,35.2,52.9,35.2,85c0,32.1-12.5,62.3-35.2,85c-22.7,22.7-52.9,35.2-85,35.2c-32.1,0-62.3-12.5-85-35.2  c-22.7-22.7-35.2-52.9-35.2-85c0-32.1,12.5-62.3,35.2-85c22.7-22.7,52.9-35.2,85-35.2C248.5,96,278.7,108.5,301.4,131.2z"
      />
    </Svg>
  );
}
