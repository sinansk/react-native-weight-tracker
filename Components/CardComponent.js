import { View } from "react-native";
import React from "react";

const CardComponent = (props) => {
  return (
    <View
      className={`${props.styleProps
        } mx-4 mb-2 flex h-60 cursor-pointer flex-col items-center justify-center rounded-xl border-2 p-4  ${props.color === "red"
          ? `border-fuchsia-400 bg-fuchsia-100 text-rose-300`
          : `border-sky-400 bg-cyan-200/20 text-cyan-300`
        } `}
    >
      {props.children}
    </View>
  );
};

export default CardComponent;
