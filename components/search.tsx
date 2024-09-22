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
        value={value}
        onChangeText={onChangeText}
        inputContainerStyle={{
          height: 52,
        }}
        leftIcon={<SearchIcon size={20} />}
        rightIcon={
          <Button
            textonly
            activeOpacity={0.3}
            style={{
              height: '100%',
              paddingLeft: 20,
            }}
          >
            <Microphone size={20} />
          </Button>
        }
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'green',
  },
});
