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
import GenderScreen from "./Screens/GenderScreen";
import LandingScreen from "./Screens/LandingScreen";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import i18n from "./locales/i18n";

const Drawer = createDrawerNavigator();
function App() {

  return (
    <NavigationContainer>
      <Drawer.Navigator
        useLegacyImplementation
        initialRouteName="LandingScreen"
        screenOptions={{
          drawerPosition: "right",
          headerShown: true,
          headerTransparent: true,
          drawerStyle: {
            backgroundColor: "rgb(240, 171, 252)",

          },
          headerTitle: true,
          drawerActiveBackgroundColor: "rgb(125, 211, 252)",
          drawerActiveTintColor: "#fff",

          headerLeft: () => false,
          headerRight: () => <DrawerToggleButton />,
        }}
      >
        <Drawer.Screen name={i18n.t("Select Gender")} component={LandingScreen} options={{ headerShown: false }} />
        {/* <Drawer.Screen name={i18n.t("Select Gender")} component={GenderScreen} /> */}
        <Drawer.Screen name={i18n.t("Ideal Weight Calculator")} component={WeightScreen} />
        <Drawer.Screen name={i18n.t("Body Fat Calculator")} component={BodyFatScreen} />
        <Drawer.Screen name={i18n.t("Daily Calorie Calculator")} component={CalorieScreen} />
        <Drawer.Screen name={i18n.t("Ideal Measurements Calculator")} component={MeasurementScreen} />
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
