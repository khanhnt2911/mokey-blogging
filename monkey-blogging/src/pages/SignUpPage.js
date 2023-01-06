import { Button } from "components/button";
import { Field } from "components/field";
import { IconEyeClose, IconEyeOpen } from "components/icon";
import { Input } from "components/input";
import { Label } from "components/label";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const SignUpPageStyles = styled.div`
  min-height: 100vh;
  padding: 40px;
  .logo {
    margin: 0 auto 20px;
  }
  .form {
    width: 600px;
    margin: 0 auto;
  }
  .heading {
    text-align: center;
    color: ${(props) => props.theme.primary};
    font-weight: bold;
    font-size: 40px;
    margin-bottom: 60px;
  }
  .label {
    display: inline-block;
    color: ${(props) => props.theme.grayDark};
    font-weight: 600;
    cursor: pointer;
  }
`;

const SignUpPage = () => {
  const [togglePassword, setTogglePassword] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    watch,
  } = useForm({});

  const handleSignUp = (values) => {
    console.log("logger");
  };

  return (
    <SignUpPageStyles>
      <div className="container">
        <img srcSet="/logo.png 2x" alt="monkey-blogging" className="logo" />
        <h1 className="heading">Monkey Blogging</h1>
        <form
          onSubmit={handleSubmit(handleSignUp)}
          autoComplete="off"
          className="form"
        >
          <Field className="field">
            <Label htmlFor="fullName">Full name</Label>
            <Input
              type="text"
              name="fullName"
              placeholder="Enter your fullname"
              control={control}
            />
          </Field>
          <Field className="field">
            <Label htmlFor="account">Email address</Label>
            <Input
              type="email"
              name="email address"
              placeholder="Enter your email"
              control={control}
            />
          </Field>
          <Field className="field">
            <Label htmlFor="password">Password</Label>
            <Input
              type={togglePassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              control={control}
              hasIcon
            >
              {togglePassword ? (
                <IconEyeOpen
                  className="input-icon"
                  onClick={() => {
                    setTogglePassword(!togglePassword);
                  }}
                ></IconEyeOpen>
              ) : (
                <IconEyeClose
                  className="input-icon"
                  onClick={() => {
                    setTogglePassword(!togglePassword);
                  }}
                ></IconEyeClose>
              )}
            </Input>
          </Field>
          <Button type="submit" disabled>
            Sign up
          </Button>
        </form>
      </div>
    </SignUpPageStyles>
  );
};

export default SignUpPage;
