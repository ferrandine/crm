import React from "react";
import styled from "styled-components";

import { Sidebar } from "../components/organisms";

import "App.css";

const Layout = styled.div`
  min-height: 100vh;
  background: #f3f4f7;
`;

function App() {
  return (
    <Layout>
      <Sidebar />
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {/* <p>Edit <code>src/App.js</code> and save to reload.</p> */}
      {/* </header> */}
    </Layout>
  );
}

export default App;
