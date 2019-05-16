import React from "react";
import styled from "styled-components";

import { Sidebar } from "components/organisms";

import { HomeApp } from "./home";

import "App.css";

const Layout = styled.div`
  display: flex;
  align-items: center;
  min-height: 100vh;
  background: #f3f4f7;
`;

function App() {
  return (
    <Layout>
      <Sidebar />
      <HomeApp />
    </Layout>
  );
}

export default App;
