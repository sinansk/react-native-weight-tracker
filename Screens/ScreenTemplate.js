import { LinearGradient } from "expo-linear-gradient";
import { useHeaderHeight } from "@react-navigation/elements";

const ScreenTemplate = ({ children, headerPadding }) => {
  //useHeaderHeight is a hook that gives you the height of the header
  const headerHeight = useHeaderHeight();

  return (
    <LinearGradient
      colors={["rgb(240, 171, 252)", "rgb(125, 211, 252)"]}
      style={{ flex: 1, paddingTop: headerHeight ? headerHeight : 0 }}
    >
      {children}
    </LinearGradient>
  );
};

export default ScreenTemplate;