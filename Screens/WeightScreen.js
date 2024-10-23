import { StyleSheet, Text, Image } from "react-native";
import React from "react";
import CardComponent from "../Components/CardComponent";
import SelectInput from "../Components/SelectInput";
import { bodyTypes, heights, weights } from "../utils/data";
import ScreenTemplate from "./ScreenTemplate";
import ButtonPrimary from "../Components/ButtonPrimary";
import { useDispatch, useSelector } from "react-redux";
import ResultComponent from "../Components/ResultComponent";
import AnimatedCard from "../Components/AnimatedCard";
import i18n from "../locales/i18n";
import { setIdealWeight } from "../redux/userInfoSlice";

const WeightScreen = () => {
  const dispatch = useDispatch();
  const idealWeightRange = useSelector(
    (state) => state.userInfo.idealWeightRange
  );
  const { idealWeightStatus } = useSelector((state) => state.userInfo);
  const { bodyType } = useSelector((state) => state.userInfo);

  return (
    <ScreenTemplate>
      <AnimatedCard
        color="red"
        cardFrontContent={
          <>
            <Text className="mb-3 ml-auto mr-auto font-semibold text-white capitalize xl:text-2xl">
              {i18n.t("Learn your body type")}!
            </Text>
            <Image
              className="w-20 h-20 "
              source={{
                uri: "https://bodygoal.netlify.app/static/media/washing-hands-female.4ed49ddac7976e562466.png",
              }}
            />
            <Text className="text-center text-white">
              {i18n.t(
                "Please wrap your thumb and forefinger around your wrist in the area you normally wear a watch"
              )}
              .
            </Text>
          </>
        }
        cardBackContent={
          idealWeightRange && (
            <>
              <Text className="mb-5 font-semibold text-white">
                {i18n.t("Your body type is {{bodyType}}", {
                  bodyType: i18n.t(bodyType),
                })}
              </Text>
              <ResultComponent
                data={idealWeightRange}
                name="Weight"
                message="Your ideal weight range is"
              />
              {/* <Text className="mt-5 font-semibold text-white">
                {idealWeightStatus}
              </Text> */}
            </>
          )
        }
      />
      <CardComponent color="blue">
        <SelectInput
          options={bodyTypes}
          label="My fingers are"
          name="bodyType"
        />
        <SelectInput options={heights} label="Height" name="height" />
        <SelectInput options={weights} label="Weight" name="weight" />
      </CardComponent>
      <ButtonPrimary
        text="Calculate"
        onPress={() => dispatch(setIdealWeight())}
      />
    </ScreenTemplate>
  );
};

export default WeightScreen;

const styles = StyleSheet.create({});
