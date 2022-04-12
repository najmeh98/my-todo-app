export interface Theme {
  fontSize: {
    normal: string;
    regular: string;
  };
  fontFamily: {
    MainFont: string;
  };
  fontWeight: { regular: string };
  color: {
    background: string;
    containerBackground: string;
    // overlayBackground: string;
    textcolor: string;
    buttoncolor: string;
    InputBgcolor: string;
    colorIcon: string;
    optionbgColor: string;
    optionColor: string;
  };
  boxShadow: string;
  boxShadowItem: string;
  boxShadowbox: string;
  modalBoxShadow: string;
  borderRadius: string;
  height: number;
  width: string;
  padding: string;
}
