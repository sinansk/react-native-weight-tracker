import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import CardComponent from "../Components/CardComponent";
import SelectInput from "../Components/SelectInput";
import { wrist } from "../data";
import ScreenTemplate from "./ScreenTemplate";
import ButtonPrimary from "../Components/ButtonPrimary";
import { useDispatch, useSelector } from "react-redux";
import { setIdealMeasurements } from "../redux/userInfoSlice";
import ResultComponent from "../Components/ResultComponent";
import AnimatedCard from "../Components/AnimatedCard";
import i18n from "../locales/i18n";

const MeasurementScreen = () => {
  const { idealMeasurements } = useSelector((state) => state.userInfo)
  const dispatch = useDispatch()

  return (
    <ScreenTemplate>
      <AnimatedCard color="red"
        cardFrontContent={
          <View>
            <Text className="mb-4 font-semibold text-center xl:text-2xl">
              {i18n.t("Learn your ideal measurements")}!
            </Text>
            <Text className="text-center">
              {i18n.t("The calculation gives your ideal body measurements.")}
            </Text>
          </View>
        }
        cardBackContent={idealMeasurements &&
          <ResultComponent data={idealMeasurements} name="Measurements" message="Your ideal measurements are (cm)" />
        }
      />
      <CardComponent color="blue">
        <Text className="font-semibold xl:text-2xl">{i18n.t("Measure your wrist")}!</Text>
        <Image
          className="w-20 h-20 "
          source={{
            uri: "https://bodygoal.netlify.app/static/media/wrist-male.4ea9ecb71b3f90e624aa.png",
          }}
        />
        <Text className="text-center">
          {i18n.t("Please measure your wrist circumference with a tape measure in the area you normally wear a watch")}.
        </Text>
        <SelectInput options={wrist} label="Wrist Size" name="wrist" />
      </CardComponent>
      <ButtonPrimary text="Calculate" onPress={() => (dispatch(setIdealMeasurements()))} />

    </ScreenTemplate>
  );
};

export default MeasurementScreen;

const styles = StyleSheet.create({});
