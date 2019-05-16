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
  width: 20%;
  background: #fff;
  margin-left: 3rem;
  padding: ${space.md} ${space.lg};
  border-radius: ${radius.big};
`;

const HeadColumn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: ${space.md};
  }
`;

const Subtitle = styled.p`
  color: ${color.grey.base};
  font-size: ${rem(12)};
`;

const CouturierPhoto = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  background: lightgrey;
  border-radius: ${radius.big};
  margin-right: ${space.base};
`;

const CouturierTitle = styled.span`
  display: block;
  margin-bottom: ${space.xxs};
`;

const SectionColumn = ({ title, subtitle, children }) => {
  return (
    <Column>
      <HeadColumn>
        <div>
          <Title type="h3">{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </div>
      </HeadColumn>
      {children}
    </Column>
  );
};

const CouturierElement = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 -${space.lg};
  padding: ${space.lg};
`;

const CouturierList = styled.div`
  display: flex;
  flex-direction: column;

  ${CouturierElement}:first-child {
    padding-top: ${space.xs};
  }

  ${CouturierElement}:not(:last-child) {
    border-bottom: 1px solid ${color.border};
  }

  ${CouturierElement}:last-child {
    padding-bottom: ${space.xs};
  }
`;

function App() {
  return (
    <Layout>
      <Sidebar />
      <SectionColumn
        title="Derniers couturiers"
        subtitle="Ce mois-ci, 6 inscriptions dont 3 validées"
      >
        <CouturierList>
          <CouturierElement>
            <CouturierPhoto />
            <div>
              <CouturierTitle>Julien Michalet</CouturierTitle>
              <Subtitle>Inscription hier à 23h20</Subtitle>
            </div>
          </CouturierElement>
          <CouturierElement>
            <CouturierPhoto />
            <div>
              <CouturierTitle>Julien Michalet</CouturierTitle>
              <Subtitle>Inscription hier à 23h20</Subtitle>
            </div>
          </CouturierElement>
        </CouturierList>
      </SectionColumn>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {/* <p>Edit <code>src/App.js</code> and save to reload.</p> */}
      {/* </header> */}
    </Layout>
  );
}

export default App;
