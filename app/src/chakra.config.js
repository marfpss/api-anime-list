import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      orange: "var(--button-color)",
      white: "var(--text-color)"
    }
  }
});

export default theme;
