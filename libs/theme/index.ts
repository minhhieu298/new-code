export const TextField = {
  MuiTextField: {
    styleOverrides: {
      root: () => ({
        "&.custom-inline-label .MuiFormLabel-root": {
          transform: "translate(44px, 17px) scale(1)",
          "&.Mui-focused": {
            transform: "translate(44px, 8px) scale(0.75)",
          },
          "&.MuiFormLabel-filled": {
            transform: "translate(44px, 8px) scale(0.75)",
          },
        },
        "&.custome-outline-label .MuiFormLabel-root": {
          transform: "translate(12px, -21px) scale(1)",
        },
        "& .MuiInputBase-root": {
          background: "#2C3137",
          borderWidth: 1,
          borderStyle: "solid",
          gap: 12,
          paddingLeft: 12,
          paddingRight: 16,
          "&.Mui-focused": {
            borderColor: "#1AAF74",
            "&.Mui-error": {
              borderColor: "#1AAF74",
            },
          },
          "&.Mui-error": {
            borderColor: "red",
          },
        },
        "& .MuiFormHelperText-root": {
        //   marginLeft: 0,
        //   marginRight: 0,
        },
      }),
    },
    defaultProps: {
      fullWidth: true,
    },
  },
};
