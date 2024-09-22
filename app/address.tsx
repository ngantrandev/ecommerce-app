import { View, Text, Pressable, FlatList } from 'react-native';
import React, { memo, useState } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';

import { Colors } from '~/constants/Colors';
import LocationIcon from '~/components/vectors/location';
import RadioView from '~/components/radioview';
import Button from '~/components/button';
import TagView from '~/components/tagview';

interface Address {
  id: number;
  tag: string;
  detail: string;
  isDefault?: boolean;
}

const AddressItem = memo(function AddressItem({
  address,
  selected,
}: {
  address: Address;
  selected: boolean;
}) {
  const { id, tag, detail, isDefault } = address;
  return (
    <View
      style={{
        borderWidth: selected ? 2 : 1,
        borderColor: selected ? Colors.light.primary[500] : Colors.light.primary[200],
        borderRadius: 10,
        paddingVertical: 16,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        columnGap: 16,
      }}
    >
      <LocationIcon />
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', columnGap: 2 }}>
          <Text
            style={{
              fontSize: 14,
              color: Colors.light.primary[900],
              fontWeight: 'bold',
              flex: 1,
            }}
            numberOfLines={1}
          >
            {tag}
          </Text>
          {isDefault && <TagView tagName="Default" />}
        </View>
        <Text numberOfLines={1}>{detail}</Text>
      </View>
      <RadioView active={selected} />
    </View>
  );
});

export default function AddressScreen() {
  const [addresses, setAddresses] = useState<Address[]>(
    Array.from({ length: 10 }, (_, index) => ({
      id: index,
      tag: `Lorem with id = ${index}`,
      detail: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nisi ipsum neque excepturi culpa error maxime architecto numquam repellat nobis odio voluptatum alias sint dolores, blanditiis sit quidem vero deleniti!`,
      isDefault: index === 0, // fake
    }))
  );
  const [selectedAddress, setSelectedAddress] = useState<number>(0);

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        justifyContent: 'space-between',
        paddingBottom: 10,
      }}
    >
      <View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: Colors.light.primary[900],
            marginTop: 20,
            marginBottom: 14,
          }}
        >
          Saved Address
        </Text>
        <View
          style={{
            height: 300,
            overflow: 'hidden',
          }}
        >
          <FlatList
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
            style={{
              rowGap: 12,
            }}
            data={addresses}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => {
                  setSelectedAddress(item.id);
                }}
              >
                <AddressItem address={item} selected={item.id === selectedAddress} />
              </Pressable>
            )}
          />
        </View>
        <Button
          outlined
          style={{
            paddingVertical: 16,
            marginTop: 24,
            borderColor: Colors.light.primary[200],
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              columnGap: 10,
            }}
          >
            <AntDesign name="plus" size={24} color="black" />
            <Text style={{ fontSize: 16, color: Colors.light.primary[900] }}>Add New Address</Text>
          </View>
        </Button>
      </View>
      <Button title="Apply" />
    </View>
  );
}
