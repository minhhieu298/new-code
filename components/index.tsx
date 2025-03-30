// CustomTextField.tsx
import React from "react";
import { TextField, TextFieldProps } from "@mui/material";

// Định nghĩa interface cho props, kế thừa toàn bộ từ TextFieldProps
interface CustomTextFieldProps extends Omit<TextFieldProps, "variant"> {
  option: string;
}

// Component custom kế thừa toàn bộ TextField
const CustomTextField: React.FC<CustomTextFieldProps> = ({
  option = "1",
  ...props
}) => {
  // Cấu hình chung cho slotProps
  const baseSlotProps = {
    input: {
      disableUnderline: true,
      sx: {
        borderRadius: 3,
      },
      ...props.slotProps,
    },
  };

  // Render theo type
  switch (option) {
    case "1":
      return (
        <TextField
          className="custom-inline-label"
          {...props}
          variant="filled"
          slotProps={baseSlotProps}
        />
      );

    case "2":
      return (
        <TextField
          className="custome-outline-label"
          {...props}
          variant="filled"
          slotProps={baseSlotProps}
        />
      );

    case "3":
      return (
        <TextField {...props} variant="filled" slotProps={baseSlotProps} />
      );

    default:
      return (
        <TextField {...props} variant="filled" slotProps={baseSlotProps} />
      );
  }
};

export default CustomTextField;
