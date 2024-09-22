import React from 'react';
import { G, Path, Svg } from 'react-native-svg';

import { IconProps } from '~/types/styles';
import { Colors } from '~/constants/Colors';

export default function AppleLogo({ style, size, color = Colors.light.primary[900] }: IconProps) {
  return (
    <Svg
      enable-background="new 0 0 56.693 56.693"
      viewBox="0 0 56.693 56.693"
      style={[
        {
          aspectRatio: 1,
          width: size || 24,
          height: size || 24,
        },
        style,
      ]}
    >
      <G>
        <Path
          fill={color}
          d="M41.777,30.517c-0.062-6.232,5.082-9.221,5.312-9.372c-2.891-4.227-7.395-4.807-8.998-4.873   c-3.83-0.389-7.477,2.256-9.42,2.256c-1.939,0-4.941-2.199-8.117-2.143c-4.178,0.062-8.029,2.43-10.179,6.17   c-4.339,7.527-1.11,18.682,3.118,24.791c2.067,2.986,4.532,6.346,7.766,6.223c3.117-0.123,4.293-2.016,8.061-2.016   s4.826,2.016,8.123,1.953c3.352-0.061,5.477-3.043,7.527-6.041c2.373-3.469,3.35-6.828,3.408-6.998   C48.305,40.433,41.844,37.958,41.777,30.517z"
        />
        <Path
          fill={color}
          d="M35.582,12.229c1.715-2.082,2.877-4.975,2.561-7.855c-2.475,0.1-5.471,1.645-7.248,3.725   c-1.592,1.846-2.984,4.785-2.611,7.613C31.045,15.926,33.861,14.307,35.582,12.229z"
        />
      </G>
    </Svg>
  );
}
