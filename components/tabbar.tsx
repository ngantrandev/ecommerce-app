import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { Colors } from '~/constants/Colors';

export default function MyTabbar({ state, descriptors, navigation, ...props }) {

  return (
    <View
      style={{
        flexDirection: 'row',
        height: 50,
        backgroundColor: Colors.light.primary[0],
        borderTopWidth: 1,
        borderColor: Colors.light.primary[100],
      }}
    >
      {state.routes.map((route, index: number) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
