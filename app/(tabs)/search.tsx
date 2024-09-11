import { View, Text, FlatList } from 'react-native';
import React, { memo, useCallback, useEffect, useState } from 'react';

import SearchInput from '~/components/search';
import Button from '~/components/button';
import { Colors } from '~/constants/Colors';
import CancelIcon from '~/components/vectors/cancel';
import Image from '~/components/image';
import UpRightArrowIcon from '~/components/vectors/uprightarrow';
import SearchIcon from '~/components/vectors/search';

type Props = {
  onPress: () => void;
};

type RecentItem = {
  name: string;
  id: number;
};
type SearchResult = {
  id: number;
  name: string;
  img: string;
  price: string;
};

type SearchResultItemProps = {
  item: SearchResult;
};

type RecentSearchItemProps = {
  item: RecentItem;
  onDelete: (id: number) => void;
};

const recentKeywords: RecentItem[] = [
  {
    name: 'T-shirt',
    id: 1,
  },
  {
    name: 'Jean',
    id: 2,
  },
  {
    name: 'Shoes',
    id: 3,
  },
  {
    name: 'Skirts',
    id: 4,
  },
  {
    name: 'Dresses',
    id: 5,
  },
  {
    name: 'T-shirt',
    id: 6,
  },
];

const resultList: SearchResult[] = [
  {
    id: 1,
    name: 'Regular Fit Slogan',
    price: '$ 1,190',
    img: 'https://genk.mediacdn.vn/thumb_w/640/2016/best-photos-2016-natgeo-national-geographic-7-5846f70467192-880-1481173142742.jpg',
  },
  {
    id: 2,
    name: 'Hochiminh City',
    price: '$ 1,190',
    img: 'https://media-cdn-v2.laodong.vn/storage/newsportal/2023/8/26/1233821/Giai-Nhat--Dem-Sai-G.jpg',
  },
];

const ClearGroup = memo(({ onPress }: Props) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 16,
        marginBottom: 20,
      }}
    >
      <Text
        style={{
          color: Colors.light.primary[900],
          fontWeight: 'bold',
          fontSize: 20,
        }}
      >
        Recent Searches
      </Text>
      <Button
        onPress={onPress}
        title="Clear all"
        textonly
        style={{
          width: 'auto',
          height: 'auto',
        }}
        titleStyle={{
          color: Colors.light.primary[900],
          fontSize: 14,
          fontWeight: 'semibold',
          textDecorationLine: 'underline',
        }}
      />
    </View>
  );
});

const RecentSearchItem = memo(function RecentSearchItem({ item, onDelete }: RecentSearchItemProps) {
  const { id, name } = item;

  return (
    <View
      key={id}
      style={{
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: Colors.light.primary[100],
      }}
    >
      <Text>{name}</Text>
      <Button
        textonly
        onPress={() => {
          onDelete(id);
        }}
        style={{
          height: '100%',
          width: 50,
        }}
      >
        <CancelIcon />
      </Button>
    </View>
  );
});

const SearchResultItem = memo(function SearchResultItem({ item }: SearchResultItemProps) {
  const { name, id, img, price } = item;
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: Colors.light.primary[100],
        paddingVertical: 20,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          columnGap: 12,
        }}
      >
        <Image
          source={img}
          style={{
            width: 56,
            height: 56,
            borderRadius: 6,
          }}
        />
        <View>
          <Text
            style={{
              color: Colors.light.primary[900],
              fontWeight: 'bold',
              fontSize: 16,
            }}
          >
            {name}
          </Text>
          <Text
            style={{
              color: Colors.light.primary[500],
              fontSize: 14,
            }}
          >
            {price}
          </Text>
        </View>
      </View>
      <View>
        <UpRightArrowIcon color={Colors.light.primary[900]} />
      </View>
    </View>
  );
});

export default function SearchScreen() {
  const [recents, setRecents] = useState(recentKeywords);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [searchText, setSearchText] = useState('');

  const handleClearKeywords = useCallback(() => {
    setRecents([]);
  }, []);

  const handleDeleteKeyword = useCallback(
    (id: number) => {
      setRecents(recents.filter((item) => item.id !== id));
    },
    [recents]
  );
  const handleChangeSearchText = useCallback((text: string) => {
    setSearchText(text);
  }, []);

  useEffect(() => {
    if (searchText.length === 0) {
      setSearchResults([]);
      return;
    }
    const results = resultList.filter((item) => item.name.includes(searchText));
    setSearchResults(results);
  }, [searchText]);

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <SearchInput value={searchText} onChangeText={handleChangeSearchText} />
      {searchText.length === 0 && recents.length > 0 && (
        <ClearGroup onPress={handleClearKeywords} />
      )}

      {searchText.length === 0 && recentKeywords.length >= 0 && (
        <FlatList
          showsVerticalScrollIndicator={false}
          style={{
            width: '100%',
            height: '100%',
          }}
          data={recents}
          renderItem={({ item }) => <RecentSearchItem item={item} onDelete={handleDeleteKeyword} />}
        />
      )}

      {searchText.length > 0 && searchResults.length === 0 && (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',

            width: '100%',
            height: '100%',
            paddingVertical: 70,
          }}
        >
          <SearchIcon
            size={64}
            style={{
              marginBottom: 20,
            }}
          />
          <Text
            style={{
              color: Colors.light.primary[900],
              fontSize: 20,
            }}
          >
            No Results Found!
          </Text>
          <Text
            style={{
              color: Colors.light.primary[500],
              fontSize: 16,
            }}
          >
            Try a similar word or something more general.
          </Text>
        </View>
      )}

      {searchResults.length > 0 && (
        <FlatList
          showsVerticalScrollIndicator={false}
          style={{
            width: '100%',
            height: '100%',
          }}
          data={searchResults}
          renderItem={({ item }) => <SearchResultItem item={item} />}
        />
      )}
    </View>
  );
}
