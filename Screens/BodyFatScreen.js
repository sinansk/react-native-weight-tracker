import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import CardComponent from "../Components/CardComponent";
import SelectInput from "../Components/SelectInput";
import {
  waist,
  neck,
  hip,
  ages,
  heights,
  weights,
} from "../data";
import ButtonPrimary from "../Components/ButtonPrimary";
import ScreenTemplate from "./ScreenTemplate";
import { fetchBodyFat } from "../redux/userInfoThunk";
import { useDispatch, useSelector } from "react-redux";
import ResultComponent from "../Components/ResultComponent";
import AnimatedCard from "../Components/AnimatedCard";
import i18n from "../locales/i18n";


const BodyFatScreen = () => {
  const dispatch = useDispatch();
  const { bodyFat } = useSelector((state) => state.userInfo)

  return (
    <ScreenTemplate>
      <AnimatedCard color="red"
        cardFrontContent={
          <>
            <Text className="mb-4 font-semibold capitalize xl:text-2xl">
              {i18n.t('Measure your body')}!
            </Text>
            <Image
              className="w-20 h-20"
              source={{
                uri: "https://bodygoal.netlify.app/static/media/body-male.46ade1503b1bbe7c0dfd.png"
              }}
            />
            <Text className="text-center">
              {i18n.t('Please measure your neck at widest point, your waist over belly button and your hip over largest point with a tape measure so that we can calculate your body fat ratio')}
            </Text>
          </>
        }
        cardBackContent={bodyFat &&
          <ResultComponent data={bodyFat} name="Body Fat" message="Your body fat percentage %" />
        }
      />
      <CardComponent color="blue" styleProps={` flex-wrap `}>
        <View className="w-1/2">
          <SelectInput options={ages} label="Age" name="age" />
          <SelectInput options={heights} label="Height" name="height" />
          <SelectInput options={weights} label="Weight" name="weight" />
        </View>
        <View className="w-1/2">
          <SelectInput options={neck} label="Neck" name="neck" />
          <SelectInput options={waist} label="Waist" name="waist" />
          <SelectInput options={hip} label="Hip" name="hip" />
        </View>
      </CardComponent>
      <ButtonPrimary text="Calculate" onPress={() => dispatch(fetchBodyFat())} />
    </ScreenTemplate>
  );
};

export default BodyFatScreen;

const styles = StyleSheet.create({});
