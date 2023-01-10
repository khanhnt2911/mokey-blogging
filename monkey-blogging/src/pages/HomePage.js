import Header from "components/layout/Header";
import Layout from "components/layout/Layout";
import { auth } from "firebase-app/firebase-app";
import { signOut } from "firebase/auth";
import HomeBanner from "module/home/HomeBanner";
import React from "react";

import styled from "styled-components";

const HomePageStyle = styled.div``;

const HomePage = () => {
  return (
    <HomePageStyle>
      <Layout>
        <HomeBanner />
      </Layout>
    </HomePageStyle>
  );
};

export default HomePage;
