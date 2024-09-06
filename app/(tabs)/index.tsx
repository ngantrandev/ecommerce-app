import { Image } from 'expo-image';
import { useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';

import Button from '~/components/button';
import SearchInput from '~/components/search';
import HeartIcon from '~/components/vectors/heart';
import { Colors } from '~/constants/Colors';

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

const ProductList = [
  {
    id: 1,
    title: 'Tshirt',
    image: 'https://www.aimsindia.com/wp-content/uploads/2022/06/world-environment-1024x683.png',
    price: 100,
  },
  {
    id: 2,
    name: 'Product 2',
    price: 200,
  },
  {
    id: 3,
    name: 'Product 3',
    price: 300,
  },
  {
    id: 4,
    name: 'Product 4',
    price: 400,
  },
  {
    id: 5,
    name: 'Product 5',
    price: 500,
  },
  {
    id: 6,
    name: 'Product 6',
    price: 600,
  },
  {
    id: 7,
    name: 'Product 7',
    price: 700,
  },
  {
    id: 8,
    name: 'Product 8',
    price: 800,
  },
  {
    id: 9,
    name: 'Product 9',
    price: 900,
  },
  {
    id: 10,
    name: 'Product 10',
    price: 1000,
  },
];

function ProductCard() {
  return (
    <View
      style={{
        position: 'relative',
        // width: 200,
        flex: 1,
        overflow: 'hidden',
        gap: 8,
        // margin: 10,
      }}
    >
      <Image
        style={{
          borderRadius: 10,
          width: '100%',
          height: 250,
        }}
        source="https://product.hstatic.net/1000369857/product/ao_thun_co_tron_ats08_mau_nau_1_026b0a00b02f45bfafa91b13c0109f2c.jpg"
        placeholder={{ blurhash }}
        contentFit="cover"
        transition={1000}
      />
      <View
        style={{
          width: '100%',
        }}
      >
        <Text
          style={{
            textTransform: 'capitalize',
            fontSize: 16,
            fontWeight: 'bold',
            color: Colors.light.primary[900],
            marginBottom: 3,
          }}
        >
          Tshirt Polo Special
        </Text>
        <Text
          style={{
            textTransform: 'capitalize',
            fontWeight: 'semibold',
            fontSize: 12,
          }}
        >
          <Text
            style={{
              color: Colors.light.primary[500],
            }}
          >
            $500
          </Text>
          <Text
            style={{
              color: Colors.light.error.red,
            }}
          >
            {' '}
            -52%{' '}
          </Text>
        </Text>
      </View>

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
        <HeartIcon size={18} />
      </Button>
    </View>
  );
}

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export default function HomeScreen() {
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
        renderItem={(item) => <ProductCard />}
        numColumns={2}
        showsVerticalScrollIndicator={false}

        // automaticallyAdjustContentInsets={true}
      />
      {/* </ScrollView> */}
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
