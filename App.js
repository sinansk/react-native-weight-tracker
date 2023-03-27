import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
  createDrawerNavigator,
  DrawerToggleButton,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import WeightScreen from "./Screens/WeightScreen";
import BodyFatScreen from "./Screens/BodyFatScreen";
import CalorieScreen from "./Screens/CalorieScreen";
import MeasurementScreen from "./Screens/MeasurementScreen";
import HomeScreen from "./Screens/HomeScreen";
import { Provider } from "react-redux";
import { store } from "./redux/store";
const Drawer = createDrawerNavigator();
function App() {

  return (
    <NavigationContainer>
      <Drawer.Navigator
        useLegacyImplementation
        initialRouteName="HomeScreen"
        screenOptions={{
          drawerPosition: "right",
          headerShown: true,
          headerTransparent: true,
          drawerStyle: {
            backgroundColor: "rgb(240, 171, 252)",

          },
          drawerActiveBackgroundColor: "rgb(125, 211, 252)",
          drawerActiveTintColor: "#fff",
          headerTitle: () => false,
          headerLeft: () => false,
          headerRight: () => <DrawerToggleButton />,
        }}
      >
        <Drawer.Screen name="HomeScreen" component={HomeScreen} />
        <Drawer.Screen name="WeightScreen" component={WeightScreen} />
        <Drawer.Screen name="BodyFatScreen" component={BodyFatScreen} />
        <Drawer.Screen name="CalorieScreen" component={CalorieScreen} />
        <Drawer.Screen name="MeasurementScreen" component={MeasurementScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
