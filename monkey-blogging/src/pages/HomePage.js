import Header from "components/layout/Header";
import { auth } from "firebase-app/firebase-app";
import { signOut } from "firebase/auth";
import React from "react";

import styled from "styled-components";

const HomePageStyle = styled.div``;

const HomePage = () => {
  return (
    <HomePageStyle>
      <Header />
    </HomePageStyle>
  );
};

export default HomePage;
