import { View, Text, StyleSheet } from 'react-native';
import React, { useRef, useState } from 'react';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

import Input from '~/components/input';
import Button from '~/components/button';
import { Colors } from '~/constants/Colors';
import Image from '~/components/image';
import Dropdown from '~/components/dropdown';
import Checkbox from '~/components/checkbox';
import Popup from '~/components/popup';
import SuccessIcon from '~/components/vectors/success';

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
  const [modalVisible, setModalVisible] = useState(true);
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  const checkboxRef = useRef<any>(null);

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <Popup
        visible={modalVisible}
        icon={
          <SuccessIcon
            size={63}
            style={{
              marginBottom: 20,
            }}
          />
        }
        title="Congratulations!"
        subtitle="Your new address has been added."
        listButton={[
          <Button
            title="Thanks"
            onPress={() => {
              setModalVisible(false);
            }}
          />,
        ]}
        onClose={() => {
          setModalVisible(false);
        }}
      />
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
              <Checkbox ref={checkboxRef} />

              <Text style={{ color: Colors.light.primary[500] }}>
                Make this as a default address
              </Text>
            </View>
          </View>
          <Button
            title="Add"
            onPress={() => {
              setModalVisible(true);
            }}
          />
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
