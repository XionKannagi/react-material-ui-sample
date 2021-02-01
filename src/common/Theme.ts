import { ThemeOptions } from '@material-ui/core';
import * as colors from "@material-ui/core/colors";


function theme(prefersDarkMode: boolean): ThemeOptions{ 
  const themeOptions: ThemeOptions = {
    typography: {
      fontFamily: [
        "Noto Sans JP",
        "Lato",
        "游ゴシック Medium",
        "游ゴシック体",
        "Yu Gothic Medium",
        "YuGothic",
        "ヒラギノ角ゴ ProN",
        "Hiragino Kaku Gothic ProN",
        "メイリオ",
        "Meiryo",
        "ＭＳ Ｐゴシック",
        "MS PGothic",
        "sans-serif",
      ].join(","),
    },
    palette: {
      primary: {
        main: colors.blue[800],
      },
      type: prefersDarkMode ? "dark" : "light",
    },
  }
  return themeOptions;
}

export default theme;