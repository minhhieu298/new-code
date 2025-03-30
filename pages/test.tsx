import CustomTextField from "@/components";
import { TextField } from "@mui/material";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type InputForm = {
  LoginName: string;
  Password: string;
};

const FormUI = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setFocus,
    clearErrors,
    resetField,
  } = useForm<InputForm>({
    shouldFocusError: false,
    defaultValues: {
      LoginName: "058C",
      Password: "",
    },
  });

  const onSubmit: SubmitHandler<InputForm> = (data) => {
    console.log(data);
  };

  console.log(errors);

  return (
    <>
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          gap: "20px",
          marginTop: 40,
        }}
      >
        <CustomTextField
          option="1"
          error={!!errors.LoginName}
          {...register("LoginName", {
            required: "Vui lòng nhập tên tài khoản",
            validate: (value) => value !== "058C" || "Vui lòng nhập tên tài khoản",
          })}
          value={watch("LoginName")}
          onFocus={() => clearErrors("LoginName")}
          helperText={errors.LoginName?.message}
          slotProps={{
            input: {
              disableUnderline: true,
              sx: {
                borderRadius: 3,
              },
              startAdornment: <p>dá</p>,
              endAdornment:
                watch("LoginName") !== "" ? (
                  <button
                    onClick={() => {
                      resetField("LoginName", {
                        defaultValue: "",
                      });
                      setFocus("LoginName");
                    }}
                  >
                    x
                  </button>
                ) : null,
            },
          }}
        />

        {/* Type with clear button */}
        <CustomTextField
          option="2"
          error={!!errors.Password}
          onFocus={() => clearErrors("LoginName")}
          {...register("Password", { required: "Vui lòng nhập mật khẩu" })}
          helperText={errors.Password?.message}
          slotProps={{
            input: {
              disableUnderline: true,
              sx: {
                borderRadius: 3,
              },
              startAdornment: <p>dá</p>,
              endAdornment:
                watch("LoginName") !== "" ? (
                  <button
                    onClick={() => {
                      resetField("LoginName", {
                        defaultValue: "",
                      });
                      setFocus("LoginName");
                    }}
                  >
                    x
                  </button>
                ) : null,
            },
          }}
        />

        {/* <TextField
          label="Filled"
          variant="filled"
          className="custom-inline-label"
          slotProps={{
            input: {
              disableUnderline: true,
              sx: {
                borderRadius: 3,
              },
              startAdornment: <p>dá</p>,
              endAdornment: (
                <button
                  onClick={() => {
                    resetField("LoginName", {
                      defaultValue: "",
                    });
                    setFocus("LoginName");
                  }}
                >
                  x
                </button>
              ),
            },
          }}
        />
        <TextField
          className="custome-outline-label"
          label="Filled"
          variant="filled"
          slotProps={{
            input: {
              disableUnderline: true,
              sx: {
                borderRadius: 3,
              },
              startAdornment: <p>dá</p>,
              endAdornment: (
                <button
                  onClick={() => {
                    resetField("LoginName", {
                      defaultValue: "",
                    });
                    setFocus("LoginName");
                  }}
                >
                  x
                </button>
              ),
            },
          }}
        /> */}
        <button type="submit">submit</button>
      </form>
      <TextField
        variant="filled"
        slotProps={{
          input: {
            disableUnderline: true,
            sx: {
              borderRadius: 3,
            },
            startAdornment: <p>dá</p>,
            endAdornment:
              watch("LoginName") !== "" ? (
                <button
                  onClick={() => {
                    resetField("LoginName", {
                      defaultValue: "",
                    });
                    setFocus("LoginName");
                  }}
                >
                  x
                </button>
              ) : null,
          },
        }}
      />
    </>
  );
};

export default FormUI;
