import React from 'react';
import { Path, Svg } from 'react-native-svg';

import { Colors } from '~/constants/Colors';
import { IconProps } from '~/types/styles';

export default function LocationIcon({
  style,
  size,
  color = Colors.light.primary[900],
}: IconProps) {
  return (
    <Svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
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
        opacity="0.2"
        d="M12 2.75C10.0109 2.75 8.10322 3.54018 6.6967 4.9467C5.29018 6.35322 4.5 8.26088 4.5 10.25C4.5 17 12 22.25 12 22.25C12 22.25 19.5 17 19.5 10.25C19.5 8.26088 18.7098 6.35322 17.3033 4.9467C15.8968 3.54018 13.9891 2.75 12 2.75ZM12 13.25C11.4067 13.25 10.8266 13.0741 10.3333 12.7444C9.83994 12.4148 9.45542 11.9462 9.22836 11.3981C9.0013 10.8499 8.94189 10.2467 9.05764 9.66473C9.1734 9.08279 9.45912 8.54824 9.87868 8.12868C10.2982 7.70912 10.8328 7.4234 11.4147 7.30764C11.9967 7.19189 12.5999 7.2513 13.1481 7.47836C13.6962 7.70542 14.1648 8.08994 14.4944 8.58329C14.8241 9.07664 15 9.65666 15 10.25C15 11.0456 14.6839 11.8087 14.1213 12.3713C13.5587 12.9339 12.7956 13.25 12 13.25Z"
        fill={color}
      />
      <Path
        d="M12 6.5C11.2583 6.5 10.5333 6.71993 9.91661 7.13199C9.29993 7.54404 8.81928 8.12971 8.53545 8.81494C8.25162 9.50016 8.17736 10.2542 8.32205 10.9816C8.46675 11.709 8.8239 12.3772 9.34835 12.9017C9.8728 13.4261 10.541 13.7833 11.2684 13.9279C11.9958 14.0726 12.7498 13.9984 13.4351 13.7145C14.1203 13.4307 14.706 12.9501 15.118 12.3334C15.5301 11.7167 15.75 10.9917 15.75 10.25C15.75 9.25544 15.3549 8.30161 14.6517 7.59835C13.9484 6.89509 12.9946 6.5 12 6.5ZM12 12.5C11.555 12.5 11.12 12.368 10.75 12.1208C10.38 11.8736 10.0916 11.5222 9.92127 11.111C9.75097 10.6999 9.70642 10.2475 9.79323 9.81105C9.88005 9.37459 10.0943 8.97368 10.409 8.65901C10.7237 8.34434 11.1246 8.13005 11.561 8.04323C11.9975 7.95642 12.4499 8.00097 12.861 8.17127C13.2722 8.34157 13.6236 8.62996 13.8708 8.99997C14.118 9.36998 14.25 9.80499 14.25 10.25C14.25 10.8467 14.0129 11.419 13.591 11.841C13.169 12.2629 12.5967 12.5 12 12.5ZM12 2C9.81273 2.00248 7.71575 2.87247 6.16911 4.41911C4.62247 5.96575 3.75248 8.06273 3.75 10.25C3.75 13.1938 5.11031 16.3138 7.6875 19.2734C8.84552 20.6108 10.1489 21.8151 11.5734 22.8641C11.6995 22.9524 11.8498 22.9998 12.0037 22.9998C12.1577 22.9998 12.308 22.9524 12.4341 22.8641C13.856 21.8147 15.1568 20.6104 16.3125 19.2734C18.8859 16.3138 20.25 13.1938 20.25 10.25C20.2475 8.06273 19.3775 5.96575 17.8309 4.41911C16.2843 2.87247 14.1873 2.00248 12 2ZM12 21.3125C10.4503 20.0938 5.25 15.6172 5.25 10.25C5.25 8.45979 5.96116 6.7429 7.22703 5.47703C8.4929 4.21116 10.2098 3.5 12 3.5C13.7902 3.5 15.5071 4.21116 16.773 5.47703C18.0388 6.7429 18.75 8.45979 18.75 10.25C18.75 15.6153 13.5497 20.0938 12 21.3125Z"
        fill={color}
      />
    </Svg>
  );
}
