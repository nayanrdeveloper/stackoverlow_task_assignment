import { NavigationContainer } from "@react-navigation/native";
import BottomTabs from "./src/navigations/BottomTabs";

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
}
