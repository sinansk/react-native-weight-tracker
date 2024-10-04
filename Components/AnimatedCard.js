import { View, Animated, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState, useEffect, useRef } from "react";

const AnimatedCard = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const flipAnimation = useRef(new Animated.Value(0)).current;

  const flipCard = () => {
    if (props.cardBackContent) {
      setIsFlipped(!isFlipped);
      Animated.timing(flipAnimation, {
        toValue: isFlipped ? 1 : 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  };
  useEffect(() => {
    if (props.cardBackContent) {
      setIsFlipped(true);
      Animated.timing(flipAnimation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    } else if (props.cardBackContent === null) {
      setIsFlipped(false);
      Animated.timing(flipAnimation, {
        toValue: 0,
        duration: 0,
        useNativeDriver: true,
      }).start();
    }
  }, [props.cardBackContent]);
  const renderFront = () => {
    return (
      <TouchableOpacity style={[styles.card]} onPress={flipCard}>
        {props.cardFrontContent}
      </TouchableOpacity>
    );
  };

  const renderBack = () => {
    return (
      <TouchableOpacity style={[styles.card]} onPress={flipCard}>
        {props.cardBackContent}
      </TouchableOpacity>
    );
  };

  const frontInterpolate = flipAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });
  const backInterpolate = flipAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ["180deg", "360deg"],
  });

  const frontAnimatedStyle = {
    transform: [{ rotateY: frontInterpolate }],
  };
  const backAnimatedStyle = {
    transform: [{ rotateY: backInterpolate }],
  };

  return (
    <View className={"mx-4 mb-2 cursor-pointer flex-col h-60 md:h-96"}>
      <Animated.View
        style={[styles.card, frontAnimatedStyle]}
        className={`rounded-xl border-2 p-4  ${
          props.color === "red"
            ? `border-cyan-300/30 bg-cyan-200/20 text-white`
            : `text-white border-sky-400/30 bg-sky-500/10 `
        } `}
      >
        {renderFront()}
      </Animated.View>
      <Animated.View
        style={[styles.card, backAnimatedStyle]}
        className={` rounded-xl border-2 p-4  ${
          props.color === "red"
            ? `border-cyan-300/30 bg-cyan-200/20 text-white`
            : `text-white border-sky-400/30 bg-sky-500/10 `
        } `}
      >
        {renderBack()}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    height: "100%",
    color: "white",
  },
  card: {
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backfaceVisibility: "hidden",
    pointerEvents: "box-none",
    color: "white",
  },
  contentWrap: {
    pointerEvents: "none",
    color: "white",
  },
});

export default AnimatedCard;
