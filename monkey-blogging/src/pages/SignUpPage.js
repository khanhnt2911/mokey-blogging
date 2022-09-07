import { Input } from "components/input";
import { Label } from "components/label";
import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const SignUpPageStyles = styled.div`
  min-height: 100vh;
  padding: 40px;
  .logo {
    margin: 0 auto 20px;
  }
  .heading {
    text-align: center;
    color: ${(props) => props.theme.primary};
    font-weight: bold;
    font-size: 40px;
    margin-bottom: 60px;
  }
  .field {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 10px;
    margin-top: 20px;
  }
  .label {
    display: inline-block;
    color: ${(props) => props.theme.grayDark};
    font-weight: 600;
    cursor: pointer;
  }
`;

const SignUpPage = () => {
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
        <img srcSet="logo.png 2x" alt="monkey-blogging" className="logo" />
        <h1 className="heading">Monkey Blogging</h1>
        <form onSubmit={handleSubmit(handleSignUp)} className="form">
          <div className="field">
            <Label htmlFor="fullName">Full name</Label>
            <Input
              type="text"
              id="fullName"
              placeholder="Enter your fullname"
              control={control}
              hasIcon
            />
          </div>
        </form>
      </div>
    </SignUpPageStyles>
  );
};

export default SignUpPage;
