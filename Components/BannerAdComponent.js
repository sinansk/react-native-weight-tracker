import { StyleSheet, Text, View } from "react-native";
import React from "react";
// import {
//   BannerAd,
//   BannerAdSize,
//   TestIds,
// } from "react-native-google-mobile-ads";

const BannerAdComponent = () => {
  //   const adUnitId = __DEV__
  //     ? TestIds.BANNER
  //     : process.env.REACT_APP_ADMOB_BANNER_ID;
  return (
    <View className="mt-2">
      {/* <BannerAd
        unitId={adUnitId}
        size={BannerAdSize.FULL_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
      /> */}
    </View>
  );
};

export default BannerAdComponent;

const styles = StyleSheet.create({});
