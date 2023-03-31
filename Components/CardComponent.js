import { View } from "react-native";
import React from "react";

const CardComponent = (props) => {
  return (
    <View
      className={`${props.styleProps
        } mx-4 mb-2 flex h-60 cursor-pointer flex-col items-center justify-center rounded-xl border-2 p-4  ${props.color === "red"
          ? `border-rose-400 bg-rose-100 text-rose-300`
          : `border-cyan-400 bg-cyan-100 text-cyan-300`
        } `}
    >
      {props.children}
    </View>
  );
};

export default CardComponent;
