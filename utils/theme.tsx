import { Theme } from "../components/types/theme";

export const darkTheme: Theme = {
  fontSize: {
    normal: "16px",
    regular: "18px",
  },
  fontWeight: {
    regular: "400",
  },
  fontFamily: {
    MainFont: "inherit",
  },
  color: {
    background: "rgba(0, 0, 0, 0.2)",
    // containerBackground: "#0c4a6e",
    containerBackground: "#DD9BDD",
    textcolor: "rgba(6, 182, 212 , 1)",
    buttoncolor: "rgb(0,0,0,1)",
    InputBgcolor: "rgba(14 ,116 ,144, 1)",
    colorIcon: "#164e63",
    optionbgColor: "#0e7490",
    optionColor: "#14b8a6",
  },
  boxShadow: "rgba(8,145,178,.3)",
  modalBoxShadow: "rgba(6, 182, 212 , 0.5)",
  boxShadowItem:
    "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(6, 182, 212, 0.3) 0px 10px 15px -3px, rgba(6, 182, 212, 0.3) 0px 4px 6px -4px",
  borderRadius: "0.375rem",
  boxShadowbox:
    "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(6, 182, 212, 0.5) 0px 4px 6px -1px, rgba(6, 182, 212, 0.5) 0px 2px 4px -2px",
  height: 40,
  width: "12rem",
  padding: "8px 16px",
};
