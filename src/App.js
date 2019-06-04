import React from "react";
import styled from "styled-components/macro";

import { Sidebar, Topbar } from "components/organisms";

import { Router } from '@reach/router';
import { Home } from "./pages/Home";
import { Customers } from './pages/Customers';

import "App.css";

const Layout = styled.div`
  display: flex;
  height: 100%;
  background: #fdf7f6;
`;

const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const SRouter = styled(Router)`
  display: flex;
  flex: 1;
  overflow: auto;
`

function App() {
  return (
    <Layout>
      <Sidebar />
      <Main>
        <Topbar />
        <SRouter >
          <Home path="/" />
          <Customers path="/customers" />
        </SRouter>
      </Main>
    </Layout>
  );
}

export default App;
