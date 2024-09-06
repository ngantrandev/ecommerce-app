import { StyleProp, ViewStyle } from 'react-native';
import React from 'react';
import { Path, Svg } from 'react-native-svg';

type Props = {
  style?: StyleProp<ViewStyle>;
  size?: number;
};

export default function Bell({ style, size }: Props) {
  return (
    <Svg
      data-name="Layer 1"
      id="Layer_1"
      viewBox="0 0 48 48"
      style={[
        {
          aspectRatio: 1,
          width: size || 30,
          height: size || 30,
        },
        style,
      ]}
    >
      <Path d="M40.62,28.34l-.87-.7A2,2,0,0,1,39,26.08V18A15,15,0,0,0,26.91,3.29a3,3,0,0,0-5.81,0A15,15,0,0,0,9,18v8.08a2,2,0,0,1-.75,1.56l-.87.7a9,9,0,0,0-3.38,7V37a4,4,0,0,0,4,4h8.26a8,8,0,0,0,15.47,0H40a4,4,0,0,0,4-4V35.36A9,9,0,0,0,40.62,28.34ZM24,43a4,4,0,0,1-3.44-2h6.89A4,4,0,0,1,24,43Zm16-6H8V35.36a5,5,0,0,1,1.88-3.9l.87-.7A6,6,0,0,0,13,26.08V18a11,11,0,0,1,22,0v8.08a6,6,0,0,0,2.25,4.69l.87.7A5,5,0,0,1,40,35.36Z" />
    </Svg>
  );
}
