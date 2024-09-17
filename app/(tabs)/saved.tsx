import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from 'expo-router';

import Image from '~/components/image';
import { Colors } from '~/constants/Colors';
import Button from '~/components/button';
import HeartIcon from '~/components/vectors/heart';

function SavedItem({ width, navigation }: { width: number; navigation: any }) {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => {
        navigation.navigate({
          name: 'products/[id]',
        });
      }}
      style={{
        width: width,
      }}
    >
      <Image
        style={{
          borderRadius: 10,
          width: '100%',
          height: 122,
        }}
        source={undefined}
      />
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          marginTop: 8,
          color: Colors.light.primary[900],
        }}
      >
        T Shirt
      </Text>
      <Text
        style={{
          fontSize: 14,
          color: Colors.light.primary[500],
          marginTop: 3,
        }}
      >
        $100
      </Text>

      <Button
        textonly
        activeOpacity={0.5}
        style={{
          position: 'absolute',
          padding: 8,
          backgroundColor: Colors.light.primary[0],
          top: 12,
          right: 12,
        }}
      >
        <HeartIcon size={18} active />
      </Button>
    </TouchableOpacity>
  );
}

export default function SavedScreen() {
  const [savedItems, setSavedItems] = useState(Array.from({ length: 15 }));
  const [itemWidth, setItemWidth] = useState(0);
  const navigation = useNavigation();

  return (
    <View
      onLayout={(e) => {
        const { width } = e.nativeEvent.layout;

        setItemWidth((width - 20) / 2);
      }}
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <FlatList
        style={{
          width: '100%',
        }}
        data={savedItems}
        contentContainerStyle={{ gap: 20 }}
        columnWrapperStyle={{ gap: 20 }}
        renderItem={() => <SavedItem width={itemWidth} navigation={navigation} />}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
}
