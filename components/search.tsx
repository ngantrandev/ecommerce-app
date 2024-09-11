import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import React, { memo } from 'react';

import Input from '~/components/input';
import SearchIcon from '~/components/vectors/search';
import Microphone from '~/components/vectors/microphone';
import Button from '~/components/button';

type Props = {
  style?: StyleProp<ViewStyle>;
  playholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
};

export default memo(function SearchInput({ style, playholder, value, onChangeText }: Props) {
  return (
    <View style={[styles.container, style]}>
      <Input
        placeholder={playholder || 'Search for clothes...'}
        inputStyle={{
          height: 52,
          paddingLeft: 60,
        }}
        value={value}
        onChangeText={onChangeText}
      />
      <View
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingLeft: 20,
          alignItems: 'center',
        }}
      >
        <SearchIcon size={20} />
        <Button
          textonly
          activeOpacity={0.3}
          style={{
            height: '100%',
            paddingRight: 20,
            paddingLeft: 20,
          }}
        >
          <Microphone size={20} />
        </Button>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'green',
  },
  //   input: {
  //     width: '100%',
  //     height: 80,
  //     backgroundColor: 'blue',
  //   },
});
