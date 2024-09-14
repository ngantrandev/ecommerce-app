import { useNavigation } from 'expo-router';
import { useState } from 'react';
import { FlatList, ScrollView, StyleSheet, View } from 'react-native';

import Button from '~/components/button';
import ProductCard from '~/components/productcard';
import SearchInput from '~/components/search';
import { Colors } from '~/constants/Colors';
import { ProductType } from '~/types/product';

const actionButton = [
  {
    id: 1,
    title: 'All',
  },
  {
    id: 2,
    title: 'Tshirts',
  },
  {
    id: 3,
    title: 'Jean',
  },
  {
    id: 4,
    title: 'Shoes',
  },
  {
    id: 5,
    title: 'Skirts',
  },
  {
    id: 6,
    title: 'Dresses',
  },
];

function ActionButtonList() {
  const [selectedGroup, setSelectedGroup] = useState(1);
  return (
    <View
      style={{
        paddingTop: 16,
        paddingBottom: 24,
      }}
    >
      <ScrollView
        horizontal={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={{
          flexDirection: 'row',
          gap: 20,
        }}
      >
        {actionButton.map(({ title, id }, index) => (
          <Button
            key={index}
            outlined
            title={title}
            titleStyle={[
              {
                color: Colors.light.primary[900],
              },
              id == selectedGroup && {
                color: Colors.light.primary[0],
              },
            ]}
            style={[
              {
                width: 'auto',
                height: 'auto',
                paddingVertical: 7,
                paddingHorizontal: 20,
                marginRight: 8,
              },
              id == selectedGroup && {
                backgroundColor: Colors.light.primary[900],
                borderWidth: 0,
              },
            ]}
            onPress={() => {
              setSelectedGroup(id);
            }}
          ></Button>
        ))}
      </ScrollView>
    </View>
  );
}

const ProductList: ProductType[] = [
  {
    id: 1,
    name: 'Tshirt',
    img: 'https://www.aimsindia.com/wp-content/uploads/2022/06/world-environment-1024x683.png',
    price: 100,
    discount: 10,
  },
  {
    id: 2,
    name: 'Product 2',
    price: 200,
    discount: 52,
  },
  {
    id: 3,
    name: 'Product 3',
    img: 'https://www.aimsindia.com/wp-content/uploads/2022/06/world-environment-1024x683.png',
    price: 300,
    discount: 52,
  },
  {
    id: 4,
    name: 'Product 4',
    price: 400,
    discount: 52,
  },
  {
    id: 5,
    name: 'Product 5',
    price: 500,
    discount: 52,
  },
  {
    id: 6,
    name: 'Product 6',
    price: 600,
    discount: 52,
  },
  {
    id: 7,
    name: 'Product 7',
    price: 700,
    discount: 52,
  },
  {
    id: 8,
    name: 'Product 8',
    price: 800,
    discount: 52,
  },
  {
    id: 9,
    name: 'Product 9',
    price: 900,
    discount: 52,
  },
  {
    id: 10,
    name: 'Product 10',
    price: 1000,
    discount: 52,
  },
];

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <SearchInput />
      <ActionButtonList />
      <FlatList
        style={{
          width: '100%',
        }}
        contentContainerStyle={{ gap: 20 }}
        columnWrapperStyle={{ gap: 20 }}
        data={ProductList}
        renderItem={({ item }) => <ProductCard product={item} navigation={navigation} />}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.light.background,
  },
  text: {
    color: Colors.light.primary[0],
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
