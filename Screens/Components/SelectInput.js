import { Text, View } from "react-native";
import React, { useEffect } from "react";
import { Picker } from "@react-native-picker/picker";
import { useDispatch, useSelector } from "react-redux";
import { setInput, userInfoSelector } from "../redux/userInfoSlice";
import i18n from "../locales/i18n";

const SelectInput = (props) => {
  const dispatch = useDispatch();

  const selectedValue = useSelector(
    (state) => userInfoSelector(state)[props.name]
  );

  return (
    <View className={`-mb-1 flex w-full pr-2 `}>
      <Text className="-mb-3 font-medium text-white">
        {i18n.t(props.label)}
      </Text>
      <Picker
        style={{ color: 'white' }}
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
            itemStyle={{ color: 'black' }} // options colors
          />
        ))}
      </Picker>
    </View>
  );
};

export default SelectInput;
