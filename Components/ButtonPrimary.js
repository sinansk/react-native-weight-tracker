import { StyleSheet, Text, ActivityIndicator } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import i18n from "../locales/i18n";
import { useSelector } from "react-redux";

const ButtonPrimary = (props) => {
  const { status } = useSelector((state) => state.userInfo)
  return (
    <TouchableOpacity onPress={props.onPress} className="px-4 py-2 mx-auto font-bold text-white bg-teal-500 border rounded-lg hover:bg-teal-400 focus:bg-teal-400 group active:bg-teal-400 focus:outline-none focus:ring w-60">
      {status === "loading" ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text className="text-center text-white uppercase ">{i18n.t(props.text)}</Text>
      )}
    </TouchableOpacity>
  );
};

export default ButtonPrimary;

const styles = StyleSheet.create({});
