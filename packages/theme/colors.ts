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
    colors: {
      ...DefaultTheme.colors,
      primary: "rgb(0, 122, 255)",
      background: "rgb(242, 242, 242)",
      card: "rgb(255, 255, 255)",
      text: "rgb(28, 28, 30)",
      border: "rgb(216, 216, 216)",
      notification: "rgb(255, 59, 48)",
    },
  },
  dark: {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: "rgb(0, 122, 255)",
      background: darkPalette.darkBlack,
      card: "rgb(255, 255, 255)",
      text: "rgb(28, 28, 30)",
      border: "rgb(216, 216, 216)",
      notification: "rgb(255, 59, 48)",
    },
  },
};
