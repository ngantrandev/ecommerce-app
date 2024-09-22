import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { memo, useCallback, useState } from 'react';

import { Colors } from '~/constants/Colors';
import { InputProps } from '~/types/styles';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';

function Input({
  label,
  placeholder = 'Enter something',
  value,
  onTextChange,
  labelStyle,
  inputStyle,
  style,
  selectionColor = Colors.light.primary[300],
  secure = false,
  inputMode,
  leftIcon,
  rightIcon,
  ...props
}: InputProps) {
  const [isSecure, setIsSecure] = useState(secure);
  const [isFocused, setIsFocused] = useState(false);

  const togglePassword = useCallback(() => {
    setIsSecure(!isSecure);
  }, [isSecure]);

  return (
    <View style={[styles.container, style]}>
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
      <View style={[styles['input-container'], isFocused && styles.focusInput]}>
        {leftIcon && leftIcon}

        <TextInput
          style={[styles.input, inputStyle]}
          selectionColor={selectionColor}
          placeholder={placeholder}
          onChangeText={onTextChange}
          value={value}
          inputMode={inputMode || 'text'}
          secureTextEntry={isSecure}
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          {...props}
        />

        {rightIcon && rightIcon}

        {secure && value && (
          <Pressable
            onPress={togglePassword}
            style={{
              flexDirection: 'row',
              padding: 10,
              paddingRight: 0,
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {isSecure ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
          </Pressable>
        )}
      </View>
    </View>
  );
}

export default memo(Input);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: Colors.light.primary[0],
  },
  'input-container': {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingLeft: 20,
    paddingRight: 20,
    borderWidth: 1,
    borderColor: Colors.light.primary[100],
    borderRadius: 10,
    height: '100%',
    columnGap: 12,
  },
  input: {
    flex: 1,
    // backgroundColor: 'red',
  },
  focusInput: {
    borderColor: Colors.light.primary[300],
    borderWidth: 2,
  },
  label: {
    color: Colors.light.primary[900],
    fontSize: 16,
    fontWeight: '500',
  },
});
