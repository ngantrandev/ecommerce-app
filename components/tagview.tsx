import { View, Text, StyleProp, ViewStyle, StyleSheet } from 'react-native';
import React from 'react';

import { Colors } from '~/constants/Colors';

export default function TagView({
  style,
  titleStyle,
  tagName = 'Tag',
}: {
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<ViewStyle>;
  tagName?: string;
}) {
  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.title, titleStyle]}>{tagName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.primary[100],
    paddingHorizontal: 9,
    paddingVertical: 3,
    borderRadius: 6,
  },
  title: {
    fontSize: 10,
    color: Colors.light.primary[900],
  },
});
