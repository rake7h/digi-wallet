import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { useColorScheme } from "react-native";
import { theme } from "@digi-wallet/theme";
import { NAVIGATION } from "../../constants/navigations";
import { HomeCardsScreen } from "../../screens/card-home";

const Stack = createNativeStackNavigator();

export function CardsStack() {
  const scheme = useColorScheme();
  const selectedTheme = theme[scheme];

  return (
    <Stack.Navigator
      initialRouteName={NAVIGATION.HOME_CARDS}
      screenOptions={{
        headerShown: false,
        // headerStyle: {
        //   backgroundColor: selectedTheme.colors.tabBG,
        // },
        // headerTintColor: "#E8EDDF",
        // headerTitleStyle: {
        //   fontWeight: "bold",
        // },
      }}
    >
      <Stack.Screen
        name={NAVIGATION.HOME_CARDS}
        component={HomeCardsScreen}
        options={{
          title: "Credit/Debit Cards",
        }}
      />
    </Stack.Navigator>
  );
}
