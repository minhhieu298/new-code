/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box } from "@mui/material";
import React, { useState } from "react";
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

  const [password, setPassword] = useState("");
  const [validate, setValidate] = useState({
    hasLow: false,
    hasCap: false,
    hasNumber: false,
    has8digit: false,
  });

  const strength = Object.values(validate).reduce(
    (a: any, item: any) => a + item,
    0
  );
  const feedback = {
    1: "Password is to weak!",
    2: "It's still weak! ",
    3: "You almost there!",
    4: "Great!! now your password is strong",
  }[strength];

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    validatePassword(e.target.value);
  };

  const validatePassword = (password: any) => {
    if (password.match(/\d+/g)) {
      setValidate((o) => ({ ...o, hasNumber: true }));
    } else {
      setValidate((o) => ({ ...o, hasNumber: false }));
    }

    if (password.match(/[A-Z]+/g)) {
      setValidate((o) => ({ ...o, hasCap: true }));
    } else {
      setValidate((o) => ({ ...o, hasCap: false }));
    }

    if (password.match(/[a-z]+/g)) {
      setValidate((o) => ({ ...o, hasLow: true }));
    } else {
      setValidate((o) => ({ ...o, hasLow: false }));
    }

    if (password.length > 7) {
      setValidate((o) => ({ ...o, has8digit: true }));
    } else {
      setValidate((o) => ({ ...o, has8digit: false }));
    }
  };

  const onSubmit: SubmitHandler<InputForm> = (data) => {
    console.log(data);
  };

  console.log(errors);

  return (
    <>
      <input
        type="text"
        className="input-password"
        value={password}
        onChange={(e) => handleChangePassword(e)}
      />
      <br />
      {strength > 0 ? (
        <progress
          hidden={password.length === 0}
          className={`password strength-${strength}`}
          value={strength}
          max="4"
        />
      ) : null}
      <br />
      <div
        className={`feedback strength-${strength}`}
        hidden={password.length === 0}
      >
        {feedback}
      </div>
      <Box component='progress' value={2}  />
    </>
  );
};

export default FormUI;
