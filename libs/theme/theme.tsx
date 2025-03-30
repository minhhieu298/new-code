import {
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useState } from "react";

// Component bọc MUI ThemeProvider
export const MuiThemeWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { theme } = useTheme();

  // const [isMounted, setIsMounted] = useState(false);

  // // Đảm bảo chỉ chạy sau khi client hydrate
  // useEffect(() => {
  //   setIsMounted(true);
  // }, []);

  // Tạo theme MUI dựa trên theme từ next-themes
  const muiTheme = useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            main: '',
            light: '#cccccc'
          }
        },
      }),
    [theme]
  );

  // // Tránh render khác nhau giữa server và client
  // if (!isMounted) {
  //   return null; // Hoặc một placeholder đơn giản
  // }

  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
