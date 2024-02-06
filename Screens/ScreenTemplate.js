import { LinearGradient } from "expo-linear-gradient";
import { useHeaderHeight } from "@react-navigation/elements";

const ScreenTemplate = ({ children, headerPadding }) => {
  //useHeaderHeight is a hook that gives you the height of the header
  const headerHeight = useHeaderHeight();

  return (
    <LinearGradient
      colors={["rgb(29, 78, 84)", "rgb(51, 65, 85)", "rgb(30, 41, 59)"]}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      style={{
        flex: 1,
        paddingTop: headerHeight ? headerHeight : 0,
        color: "white",
      }}
    >
      {children}
    </LinearGradient>
  );
};

export default ScreenTemplate;