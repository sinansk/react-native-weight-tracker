import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const ButtonPrimary = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} className="px-4 py-2 mx-auto font-bold border rounded bg-fuchsia-600 border-fuchsia-700 w-60">
      <Text className="text-center text-white ">{props.text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonPrimary;

const styles = StyleSheet.create({});
