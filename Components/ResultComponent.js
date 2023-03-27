import { StyleSheet, Text, View, FlatList, ActivityIndicator } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import i18n from "../locales/i18n";

const ResultComponent = (props) => {
  const { status } = useSelector((state) => state.userInfo)
  console.log(JSON.stringify(props.data))
  if (status === "loading") {
    return (
      <ActivityIndicator size="large" color="#0000ff" />
    )
  } else
    return (

      typeof (props.data) === "object") && (props.name !== "Weight") ? (
      <SafeAreaView style={styles.container}>
        <Text className="mb-3 text-sm font-bold text-center capitalize text-fuchsia-800">{i18n.t(props.message)}</Text>
        {Object.entries(props.data).map(([key, value]) => (
          <View style={styles.row} key={key}>
            <Text style={styles.key}>{i18n.t(key)}</Text>
            <Text style={styles.value}>{value}</Text>
          </View>
        ))}
      </SafeAreaView>
    ) : (
      <>
        <Text className="text-base font-bold text-center text-fuchsia-800">{i18n.t(props.message)}</Text>
        <Text className="mt-5 text-lg font-semibold text-slate-700">{props.data}</Text>
      </>
    )
};

export default ResultComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    height: "100%",
    marginTop: -20

  },
  row: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 0.3,
    borderBottomColor: '#ddd',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: '100%',

  },
  header: {
    fontWeight: 'bold',
    fontSize: 12,
    flex: 1,
    textAlign: 'center',
  },
  key: {
    fontSize: 14,
    textAlign: 'left',
    fontWeight: 'bold',
    color: '#333',
    flexBasis: '70%',
    textTransform: "capitalize"

  },
  value: {
    fontSize: 14,
    flex: 1,
    textAlign: 'center',
    color: '#333',

  },
});