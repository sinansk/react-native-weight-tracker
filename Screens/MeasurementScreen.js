import { StyleSheet, Text, Image } from "react-native";
import React from "react";
import CardComponent from "../Components/CardComponent";
import SelectInput from "../Components/SelectInput";
import { wrist } from "../utils/data";
import ScreenTemplate from "./ScreenTemplate";
import ButtonPrimary from "../Components/ButtonPrimary";
import { useDispatch, useSelector } from "react-redux";
import ResultComponent from "../Components/ResultComponent";
import AnimatedCard from "../Components/AnimatedCard";
import i18n from "../locales/i18n";
import BannerAdComponent from "../Components/BannerAdComponent";
import { fetchIdealMeasurements } from "../redux/userInfoThunk";

const MeasurementScreen = () => {
  const { idealMeasurements } = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();
  return (
    <ScreenTemplate>
      <AnimatedCard
        color="red"
        cardFrontContent={
          <>
            <Text className="mb-4 font-semibold text-center text-white xl:text-2xl">
              {i18n.t("Learn your ideal measurements")}!
            </Text>
            <Text className="text-center text-white">
              {" "}
              {/*i18n-js package not trasnlating if you have "." end of sentence */}
              {i18n.t(
                "The calculation gives your ideal body measurements, which can be achieved by natural methods"
              )}{" "}
              .
              {i18n.t(
                "Various studies show that there is a correct correlation between wrist thickness and other body parts"
              )}
              .
              {i18n.t(
                "If you are doing sports, you can set these measures as the goals you can reach in your ideal weight and body fat ratio"
              )}
              .
            </Text>
          </>
        }
        cardBackContent={
          idealMeasurements && (
            <ResultComponent
              data={idealMeasurements}
              name="Measurements"
              message="Your ideal measurements are (cm)"
            />
          )
        }
      />
      <CardComponent color="blue">
        <Text className="font-semibold text-white xl:text-2xl">
          {i18n.t("Measure your wrist")}!
        </Text>
        <Image
          className="w-20 h-20"
          source={{
            uri: "https://bodygoal.netlify.app/static/media/wrist-male.4ea9ecb71b3f90e624aa.png",
          }}
        />
        <Text className="text-center text-white">
          {i18n.t(
            "Please measure your wrist circumference with a tape measure in the area you normally wear a watch"
          )}
          .
        </Text>
        <SelectInput options={wrist} label="Wrist Size" name="wrist" />
      </CardComponent>
      <ButtonPrimary
        text="Calculate"
        onPress={() => dispatch(fetchIdealMeasurements())}
      />
      <BannerAdComponent />
    </ScreenTemplate>
  );
};

export default MeasurementScreen;

const styles = StyleSheet.create({});
