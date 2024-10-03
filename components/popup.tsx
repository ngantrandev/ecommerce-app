import { View, Text, Modal, StyleSheet, Pressable } from 'react-native';
import React from 'react';

import { Colors } from '~/constants/Colors';

interface PopupProps {
  visible: boolean;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  listButton: React.ReactNode[];
  onClose?: () => void;
}

export default function Popup({
  visible,
  icon,
  title,
  subtitle,
  listButton,
  onClose,
  ...props
}: PopupProps) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
      {...props}
    >
      <Pressable style={styles.centeredView} onPress={onClose}>
        <View style={styles.modalView}>
          {icon}
          <Text
            style={{
              marginBottom: 8,
              fontSize: 20,
              fontWeight: 'bold',
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              marginBottom: 24,
              fontSize: 16,
              color: Colors.light.primary[500],
            }}
          >
            {subtitle}
          </Text>
          <View
            style={{
              width: '100%',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: 12,
            }}
          >
            {listButton.map((item, index) => {
              return item;
            })}
          </View>
        </View>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 24,
  },
  modalView: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
