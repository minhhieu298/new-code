// import "@/styles/globals.css";
import { TextField } from "@/libs/theme";
import { createTheme, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";

// Tạo Emotion Cache
const theme = createTheme({
  components: {
    ...TextField,
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginTop: 4,
          margin: 0
        },
      },
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
