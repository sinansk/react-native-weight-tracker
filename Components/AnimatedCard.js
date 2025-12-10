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
        useNativeDriver: false, // rotateY requires useNativeDriver: false on Android
      }).start();
    }
  };

  useEffect(() => {
    if (props.cardBackContent) {
      setIsFlipped(true);
      Animated.timing(flipAnimation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false, // rotateY requires useNativeDriver: false on Android
      }).start();
    } else {
      setIsFlipped(false);
      flipAnimation.setValue(0);
    }
  }, [props.cardBackContent]);

  const renderFront = () => {
    if (!props.cardFrontContent) return null;
    return (
      <TouchableOpacity style={styles.card} onPress={flipCard} activeOpacity={0.9}>
        {props.cardFrontContent}
      </TouchableOpacity>
    );
  };

  const renderBack = () => {
    if (!props.cardBackContent) return null;
    return (
      <TouchableOpacity style={styles.card} onPress={flipCard} activeOpacity={0.9}>
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
    transform: [{ perspective: 1000 }, { rotateY: frontInterpolate }],
  };
  const backAnimatedStyle = {
    transform: [{ perspective: 1000 }, { rotateY: backInterpolate }],
  };

  return (
    <View style={styles.container} className={"mx-4 mb-2 cursor-pointer flex-col h-[270px] md:h-96"}>
      <Animated.View
        style={[styles.card, frontAnimatedStyle]}
        className={`rounded-xl border-2 p-4 ${
          props.color === "red"
            ? `border-cyan-300/30 bg-cyan-200/20 text-white`
            : `text-white border-sky-400/30 bg-sky-500/10`
        }`}
      >
        {renderFront()}
      </Animated.View>
      {props.cardBackContent && (
        <Animated.View
          style={[styles.card, backAnimatedStyle]}
          className={`rounded-xl border-2 p-4 ${
            props.color === "red"
              ? `border-cyan-300/30 bg-cyan-200/20 text-white`
              : `text-white border-sky-400/30 bg-sky-500/10`
          }`}
        >
          {renderBack()}
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    transform: [{ perspective: 1000 }],
  },
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
  },
  contentWrap: {
    pointerEvents: "none",
    color: "white",
  },
});

export default AnimatedCard;
