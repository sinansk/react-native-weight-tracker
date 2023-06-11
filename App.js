import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import {
  createDrawerNavigator,
  DrawerToggleButton,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import WeightScreen from "./Screens/WeightScreen";
import BodyFatScreen from "./Screens/BodyFatScreen";
import CalorieScreen from "./Screens/CalorieScreen";
import MeasurementScreen from "./Screens/MeasurementScreen";
import LandingScreen from "./Screens/LandingScreen";
import { Provider, useSelector } from "react-redux";
import { store } from "./redux/store";
import i18n from "./locales/i18n";
import { useEffect } from "react";
import 'expo-dev-client';
const Drawer = createDrawerNavigator();
function App() {

  const { language } = useSelector((state) => state.userInfo)
  useEffect(() => {
    i18n.locale = language
  }, [language])

  return (
    <NavigationContainer>
      <StatusBar translucent={true} backgroundColor={"transparent"} />
      <Drawer.Navigator
        useLegacyImplementation
        initialRouteName="LandingScreen"
        screenOptions={{
          drawerPosition: "right",
          headerShown: true,
          headerTransparent: true,
          contentStyle: { flex: 1 },
          drawerStyle: {
            backgroundColor: "#c4b5fd",

          },

          headerTitle: true,
          drawerActiveBackgroundColor: "rgb(125, 211, 252)",
          drawerActiveTintColor: "#fff",

          headerLeft: () => false,
          headerRight: () => <DrawerToggleButton />,
        }}
      >
        <Drawer.Screen name={i18n.t("Select Gender")} component={LandingScreen} options={{ headerShown: false }} />
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
