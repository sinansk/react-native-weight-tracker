import { StyleSheet, Text, Image } from "react-native";
import React from "react";
import CardComponent from "../Components/CardComponent";
import SelectInput from "../Components/SelectInput";
import {
  heights,
  weights,
  activityLevels,
  bodyGoals,
  ages,
} from "../utils/data";
import ScreenTemplate from "./ScreenTemplate";
import ButtonPrimary from "../Components/ButtonPrimary";
import { useSelector, useDispatch } from "react-redux";
import { fetchMacroNeed } from "../redux/userInfoThunk";
import ResultComponent from "../Components/ResultComponent";
import AnimatedCard from "../Components/AnimatedCard";
import i18n from "../locales/i18n";
import { setMacroNeed } from "../redux/userInfoSlice";

const CalorieScreen = () => {
  const dispatch = useDispatch();
  const { calorieNeedByBodyGoal } = useSelector((state) => state.userInfo);
  return (
    <ScreenTemplate>
      <AnimatedCard
        color="red"
        cardFrontContent={
          <>
            <Text className="font-semibold text-white capitalize xl:text-2xl">
              {i18n.t("Set your body goal")}!
            </Text>
            <Image
              className="w-20 h-20"
              source={{
                uri: "https://bodygoal.netlify.app/static/media/goal-female.ce284a10d38a0cde526b.png",
              }}
            />
            <Text className="mb-2 text-center text-white capitalize">
              {i18n.t(
                "Please set your body goal and we will calculate your daily calorie need"
              )}
            </Text>
            <SelectInput
              options={bodyGoals}
              label="My goal is"
              name="bodyGoal"
            />
          </>
        }
        cardBackContent={
          calorieNeedByBodyGoal && (
            <>
              <ResultComponent
                data={calorieNeedByBodyGoal}
                message="Your daily calorie need for your goal"
              />
              <SelectInput
                options={bodyGoals}
                label="My goal is"
                name="bodyGoal"
              />
              <Text className="mt-1 text-xs text-white">
                (
                {i18n.t("You need to recalculate if you change your body goal")}
                )
              </Text>
            </>
          )
        }
      />
      <CardComponent color="blue">
        <SelectInput options={ages} label="Age" name="age" />
        <SelectInput options={heights} label="Height" name="height" />
        <SelectInput options={weights} label="Weight" name="weight" />
        <SelectInput
          options={activityLevels}
          label="Activity Level"
          name="activityLevel"
        />
      </CardComponent>
      <ButtonPrimary
        text="Calculate"
        onPress={() => dispatch(setMacroNeed())}
      />
    </ScreenTemplate>
  );
};

export default CalorieScreen;
