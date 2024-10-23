import { View } from "react-native";
import React from "react";

const CardComponent = (props) => {
  return (
    <View
      className={`${
        props.styleProps
      } mx-4 mb-2 flex h-[270px] md:h-96 cursor-pointer flex-col items-center justify-center rounded-xl border-2 p-4 text-white ${
        props.color === "red"
          ? `text-white  border-cyan-300/30 bg-cyan-200/20`
          : `text-white border-sky-400/30 bg-sky-500/10`
      } `}
    >
      {props.children}
    </View>
  );
};

const styles = {
  card: {
    color: "white",
  },
};

export default CardComponent;
