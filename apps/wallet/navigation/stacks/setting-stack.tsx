import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { NAVIGATION } from "../../constants/navigations";
import { SettingScreen } from "../../screens";

const Stack = createNativeStackNavigator();

export function SettingStack() {
  return (
    <Stack.Navigator initialRouteName={NAVIGATION.SETTING}>
      <Stack.Screen
        name={NAVIGATION.SETTING}
        component={SettingScreen}
        options={{ title: "Settings" }}
      />
    </Stack.Navigator>
  );
}
