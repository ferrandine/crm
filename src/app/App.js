import React from "react";
import styled from "styled-components";
import { rem } from "polished";

import { Title } from "components/atoms";
import { Sidebar } from "components/organisms";

import { space, radius, color } from "const";

import "App.css";

const Layout = styled.div`
  display: flex;
  align-items: center;
  min-height: 100vh;
  background: #f3f4f7;
`;

const Column = styled.div`
  width: 30%;
  background: #fff;
  margin-left: 3rem;
  padding: ${space.md} ${space.base};
  border-radius: ${radius.big};
`;

const HeadColumn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Subtitle = styled.p`
  color: ${color.grey.base};
  font-size: ${rem(12)};
`;

const SectionColumn = ({ title, subtitle }) => {
  return (
    <Column>
      <HeadColumn>
        <div>
          <Title type="h3">{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </div>

        {/* <span>Tous</span> */}
      </HeadColumn>
    </Column>
  );
};

function App() {
  return (
    <Layout>
      <Sidebar />
      <SectionColumn
        title="Derniers couturiers"
        subtitle="Ce mois-ci, 6 inscriptions dont 3 validées"
      >
        Coucou
      </SectionColumn>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {/* <p>Edit <code>src/App.js</code> and save to reload.</p> */}
      {/* </header> */}
    </Layout>
  );
}

export default App;
