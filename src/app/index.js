import React from "react";
import styled from "styled-components";

import { Sidebar, Topbar } from "components/organisms";

import { HomeApp } from "./home";

import "App.css";

const Layout = styled.div`
  display: flex;
  align-items: center;
  min-height: 100vh;
  background: #f3f4f7;
`;

const Main = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <Layout>
      <Sidebar />
      <Main>
        <Topbar />
        <HomeApp />
      </Main>
    </Layout>
  );
}

export default App;
