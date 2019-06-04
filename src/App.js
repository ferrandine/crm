import React from "react";
import styled from "styled-components/macro";
import { space } from 'const';
import { Sidebar, Topbar } from "components/organisms";

import { Router } from '@reach/router';
import { Home } from "./pages/Home";
import { Customers } from './pages/Customers';
import { Sewers } from './pages/Sewers';

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
  margin-bottom: ${space.l};
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
          <Sewers path="/sewers" />
        </SRouter>
      </Main>
    </Layout>
  );
}

export default App;
