import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import i18n from "../locales/i18n";

const ResultComponent = (props) => {
  const { status } = useSelector((state) => state.userInfo);

  if (status === "loading") {
    return <ActivityIndicator size="large" color="#0000ff" />;
  } else
    return typeof props.data === "object" && props.name !== "Weight" ? (
      <View style={styles.container}>
        <Text className="mb-3 text-sm font-bold text-center text-white capitalize">
          {i18n.t(props.message)}
        </Text>
        {Object.entries(props.data).map(([key, value]) => (
          <View style={styles.row} key={key}>
            <Text style={styles.key}>{i18n.t(key)}</Text>
            <Text style={styles.value}>{value}</Text>
          </View>
        ))}
      </View>
    ) : (
      <>
        <Text className="text-base font-bold text-center text-white">
          {i18n.t(props.message)}
        </Text>
        <Text className="mt-5 text-lg font-semibold text-white">
          {props.data}
        </Text>
      </>
    );
};

export default ResultComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    marginTop: -40,
    color: "white",
  },
  row: {
    flex: 1,
    flexDirection: "row",
    borderBottomWidth: 0.3,
    borderBottomColor: "#1E313B",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  header: {
    fontWeight: "bold",
    fontSize: 12,
    flex: 1,
    textAlign: "center",
  },
  key: {
    fontSize: 12,
    textAlign: "left",
    fontWeight: "bold",
    color: "white",
    flexBasis: "70%",
    textTransform: "capitalize",
  },
  value: {
    fontSize: 12,
    flex: 1,
    textAlign: "center",
    color: "white",
  },
});
