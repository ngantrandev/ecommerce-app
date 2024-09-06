import React, { memo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import { Colors } from '~/constants/Colors';

export default memo(function MyTabbar({ state, descriptors, navigation }: BottomTabBarProps) {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: Colors.light.primary[0],
        borderTopWidth: 1,
        borderTopColor: Colors.light.primary[100],
        paddingTop: 16,
      }}
    >
      {state.routes.map((route, index: number) => {
        const { options } = descriptors[route.key];

        const { tabBarIcon } = options;

        const label = options.tabBarLabel || options.title || route.name;

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
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {tabBarIcon &&
              tabBarIcon({
                focused: isFocused,

                color: isFocused ? Colors.light.primary[900] : Colors.light.primary[400],
                size: 24,
              })}
            <Text
              style={{
                textTransform: 'capitalize',
                color: isFocused ? Colors.light.primary[900] : Colors.light.primary[400],
                fontWeight: 'medium',
              }}
            >
              <>{label}</>
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
});
