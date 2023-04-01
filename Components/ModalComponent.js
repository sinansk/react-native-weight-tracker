import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Icon } from 'react-native-vector-icons/FontAwesome';

import i18n from '../locales/i18n';

const ModalComponent = forwardRef((props, ref) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(props.visible)
  useImperativeHandle(ref, () => {
    return {
      openModal: () => open(),
      closeModal: () => close(),
    };
  });
  const open = () => {
    setIsModalOpen(true);
  };

  const close = () => {
    setIsModalOpen(false);
  };

  if (!isModalOpen) return null;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isModalOpen}
      hasBackdrop={true}
      onRequestClose={() => {
        setIsModalOpen(false);
      }}
    >
      <View className="items-center justify-center flex-1 bg-gray-900 cursor-pointer opacity-90">
        <View className="w-4/5 h-auto p-4 bg-white h-max-1/2 rounded-xl">
          <TouchableOpacity className="absolute right-2 top-2" onPress={() => setIsModalOpen(false)}><Text>X</Text></TouchableOpacity>
          <Text>{props.title && i18n.t(props.title)}</Text>
          <View>{props.children}</View>
        </View>
      </View>
    </Modal>
  );
})


export default ModalComponent

