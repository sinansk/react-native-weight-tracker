import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const ButtonPrimary = (props) => {
  return (
    <TouchableOpacity className="px-4 py-2 mx-auto font-bold text-white border rounded bg-fuchsia-700 border-fuchsia-600 w-60">
      <Text className="text-center">{props.text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonPrimary;

const styles = StyleSheet.create({});
