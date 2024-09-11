import { StyleProp } from 'react-native';
import React from 'react';
import { ImageStyle } from 'expo-image';
import { Image as ExpoImage } from 'expo-image';

type Props = {
  style?: StyleProp<ImageStyle>;
  source: string;
  placeholder?: any;
};

export default function Image({
  style,
  source,
  placeholder = '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[',
}: Props) {
  return (
    <ExpoImage
      style={style}
      source={source}
      placeholder={placeholder}
      contentFit="cover"
      transition={1000}
    />
  );
}
