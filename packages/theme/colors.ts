import { DarkTheme, DefaultTheme } from "@react-navigation/native";

const darkPalette = {
  gray1: "#CFDBD5",
  gray2: "#E8EDDF",
  yellow: "#F5CB5C",
  darkBlack: "#242423",
  black: "#333533",
};

export const theme = {
  light: {
    ...DefaultTheme,
    tabBG: "#fff",
  },
  dark: {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: darkPalette.yellow,
      background: darkPalette.darkBlack,
      card: darkPalette.gray2,
      text: darkPalette.black,
      border: darkPalette.gray1,
      notification: darkPalette.yellow,
      activeTab: darkPalette.yellow,
      inactiveTab: darkPalette.gray2,
      tabBG: darkPalette.black,
    },
  },
};
