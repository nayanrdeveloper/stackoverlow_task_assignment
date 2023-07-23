import { NavigationContainer } from "@react-navigation/native";
import BottomTabs from "./src/navigations/BottomTabs";
import { Provider } from "react-redux";
import { store } from "./src/store/store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomTabs />
      </NavigationContainer>
    </Provider>
  );
}
