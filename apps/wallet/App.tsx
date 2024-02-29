import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { styles } from "./styles";

import { TabNavigator } from "./navigation/tabs";

export function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <TabNavigator />
    </GestureHandlerRootView>
  );
}
