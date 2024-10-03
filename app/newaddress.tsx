import { View, Text, StyleSheet } from 'react-native';
import React, { useRef } from 'react';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import Checkbox from 'expo-checkbox';

import Input from '~/components/input';
import Button from '~/components/button';
import { Colors } from '~/constants/Colors';
import Image from '~/components/image';
import Dropdown from '~/components/dropdown';

const data: { label: string; value: string }[] = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },
];

export default function NewAddressScreen() {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <Image source={require('~/assets/images/Map.png')} />

      <BottomSheet ref={bottomSheetRef} snapPoints={['80%']}>
        <BottomSheetView style={styles.contentContainer}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
            }}
          >
            Address
          </Text>
          <View
            style={{
              width: '100%',
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: '500',
              }}
            >
              Address Tag
            </Text>

            <Dropdown
              data={data}
              labelField={'label'}
              valueField={'value'}
              onChange={() => {}}
              search
            />

            <Input
              inputContainerStyle={{
                width: '100%',
                height: 50,
              }}
              label="Full address"
            />
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                columnGap: 8,
                marginTop: 10,
              }}
            >
              <Checkbox
                value={true}
                style={{
                  borderRadius: 5,
                }}
                color={Colors.light.primary[900]}
              />
              <Text>Make this as a default address</Text>
            </View>
          </View>
          <Button title="Add" />
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    alignItems: 'center',
    paddingHorizontal: 24.5,
    rowGap: 20,
    justifyContent: 'space-between',
  },
});
