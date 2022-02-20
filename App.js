import React, { useState } from "react";
import StoreNavigator from "./navigation/StoreNavigation";
import * as Font from "expo-font";
// Import:
import AppLoading from "expo-app-loading"; 

const fetchFonts = () => {
  Font.loadAsync({
    "my-font": require("./assets/fonts/Bungee-Regular.ttf"),
  });
};
export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={err => console.log(err)}
      />
    );
  }
  return <StoreNavigator/>;
}
