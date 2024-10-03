import { StyleSheet } from 'react-native';
import React from 'react';
import { Dropdown as DropdownElement } from 'react-native-element-dropdown';

import { Colors } from '~/constants/Colors';
import { DropdownProps } from 'react-native-element-dropdown/lib/typescript/components/Dropdown/model';

export default function Dropdown<T>({
  data,
  labelField,
  valueField,
  onChange,
  ...props
}: DropdownProps<T>) {
  return (
    <DropdownElement
      style={styles.container}
      placeholderStyle={styles.placeholder}
      inputSearchStyle={{}}
      iconStyle={{}}
      data={data}
      maxHeight={300}
      labelField={labelField}
      valueField={valueField}
      placeholder="Choose one"
      searchPlaceholder="Search..."
      onChange={(item) => {}}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 16,
    borderColor: Colors.light.primary[100],
  },
  placeholder: { color: Colors.light.primary[400] },
});
