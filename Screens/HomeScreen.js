import { Text, View, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import CardComponent from "../Components/CardComponent";
import ScreenTemplate from "./ScreenTemplate"
import { useDispatch, useSelector } from "react-redux";
import { setGender } from "../redux/userInfoSlice";
import i18n from "../locales/i18n";
import { StatusBar } from "expo-status-bar";

const HomeScreen = () => {
  const dispatch = useDispatch()
  return (
    <ScreenTemplate>
      <View className="w-full h-full">
        <Pressable onPress={() => dispatch(setGender("female"))} >
          <CardComponent color="red">
            <Image
              className="w-40 h-40 "
              source={{
                uri: "https://bodygoal.netlify.app/static/media/female.c13a1bfe0fea4e936f29.png",
              }}
            />
            <Text className="mt-1 text-xl font-semibold text-rose-400">{i18n.t("Female")}</Text>
          </CardComponent>
        </Pressable>
        <Pressable onPress={() => dispatch(setGender("male"))} >
          <CardComponent color="blue">
            <Image
              className="w-40 h-40 "
              source={{
                uri: "https://bodygoal.netlify.app/static/media/male.a185b0b4610f1e9dd113.png",
              }}
            />
            <Text className="mt-1 text-xl font-semibold text-blue-400">{i18n.t("Male")}</Text>
          </CardComponent>
        </Pressable>
      </View>
    </ScreenTemplate>
  );

};


export default HomeScreen;
