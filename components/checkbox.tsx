import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Checkbox as ExpoCheckbox } from 'expo-checkbox';

import { Colors } from '~/constants/Colors';

export default forwardRef(function Checkbox(props, ref) {
  const [checked, setChecked] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      checked: checked,
      setUnchecked: () => {
        setChecked(false);
      },
      setChecked: () => {
        setChecked(true);
      },
    };
  }, [checked]);

  return (
    <ExpoCheckbox
      value={checked}
      style={styles.container}
      color={checked ? Colors.light.primary[900] : Colors.light.primary[100]}
      onValueChange={setChecked}
      {...props}
    />
  );
});

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 5,
    width: 20,
    height: 20,
  },
});
