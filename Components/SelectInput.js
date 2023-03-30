import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { Picker } from "@react-native-picker/picker";

import { useDispatch, useSelector } from "react-redux";
import { setInput, userInfoSelector } from "../redux/userInfoSlice";
import i18n from "../locales/i18n";

const SelectInput = (props) => {
  const dispatch = useDispatch();

  const selectedValue = useSelector(
    (state) => userInfoSelector(state)[props.name]
  );

  useEffect(() => {
    // her değer değiştiğinde yapılacak işlemler
    console.log("selected value changed:", selectedValue);
  }, [selectedValue]);
  return (
    <View className={`-mb-1 flex w-full pr-2 `}>
      <Text className="-mb-3 font-medium text-slate-800">
        {i18n.t(props.label)}
      </Text>
      <Picker

        selectedValue={selectedValue ? selectedValue : props.options[0].value ?? props.options[0]}
        onValueChange={(itemValue, itemIndex) =>
          dispatch(setInput({ name: props.name, value: itemValue }))
        }
      >
        {props.options?.map((option, index) => (
          <Picker.Item
            key={index}
            label={
              option.status ? i18n.t(option.status) : option.toString()
            }
            value={option.value ?? option}
          />
        ))}
      </Picker>
    </View>
  );
};

export default SelectInput;
