import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { NAVIGATION } from "../../constants/navigations";
import { SettingScreen } from "../../screens";

const Stack = createNativeStackNavigator();

export function SettingStack() {
  return (
    <Stack.Navigator
      initialRouteName={NAVIGATION.SETTING}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={NAVIGATION.SETTING} component={SettingScreen} />
    </Stack.Navigator>
  );
}
