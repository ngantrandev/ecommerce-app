import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import React from 'react';

import { Colors } from '~/constants/Colors';

type Props = {
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<ViewStyle>;
  dividerStyle?: StyleProp<ViewStyle>;
  title?: string;
};

export default function Divider({ title, style, titleStyle, dividerStyle }: Props) {
  return (
    <View style={[styles.container, style]}>
      {title ? (
        <View style={styles['flex-row-between']}>
          <View style={[styles.divider, dividerStyle]}></View>
          <Text style={[styles.title, titleStyle]}>{title || 'Or'}</Text>
          <View style={[styles.divider, dividerStyle]}></View>
        </View>
      ) : (
        <View style={[styles.divider, dividerStyle]}></View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 16,
  },
  'flex-row-between': {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
  },
  divider: {
    flex: 1,
    borderBottomWidth: 2,
    borderColor: Colors.light.primary[100],
  },
  title: {
    color: Colors.light.primary[900],
    fontSize: 16,
    fontWeight: 'medium',
  },
});
