import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React, { memo } from 'react';

import { Colors } from '~/constants/Colors';
import { ButtonProps } from '~/types/styles';

function Button({
  style,
  activeOpacity = 0.8,
  children,
  title,
  onPress,
  disabled,
  outlined,
  textonly,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      style={[
        styles.button,
        style,
        outlined && styles.outlined,
        disabled && {
          backgroundColor: Colors.light.primary[200],
        },
        textonly && {
          backgroundColor: 'transparent',
        },
      ]}
      onPress={disabled ? undefined : onPress}
      disabled={disabled}
      {...props}
    >
      {title ? <Text style={styles.title}>{title}</Text> : null}
      {children}
    </TouchableOpacity>
  );
}

export default memo(Button);

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 56,
    backgroundColor: Colors.light.primary[900],
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  outlined: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: Colors.light.primary[200],
  },
  title: {
    color: Colors.light.primary[0],
    fontSize: 16,
    fontWeight: 'medium',
  },
});
