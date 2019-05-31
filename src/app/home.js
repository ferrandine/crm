import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { getLastSewersRegistered } from "services/sewer";
import { getLastClientsRegistered } from "services/client";

import { space, radius, color } from "const";

import { Title, Subtitle } from "components/atoms";

const Column = styled.div`
  width: 20%;
  background: #fff;
  margin-left: 3rem;
  padding: ${space.md} ${space.md};
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

const CouturierElement = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 -${space.md};
  padding: ${space.md};
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

const CouturierPhoto = styled.img`
  display: block;
  width: 40px;
  height: 40px;
  background: lightgrey;
  border-radius: ${radius.big};
  margin-right: ${space.base};
`;

const CouturierTitle = styled.span`
  display: block;
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

const Row = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const HomeApp = () => {
  const [sewers, setSewers] = useState(null);
  const [clients, setClients] = useState(null);

  const getLastSewers = () =>
    getLastSewersRegistered().then(respValue => setSewers(respValue));

  const getLastClients = () => {
    getLastClientsRegistered().then(respValue => {
      setClients(respValue);
    });
  };

  useEffect(() => {
    getLastSewers();
    getLastClients();
  }, []);

  return (
    <Row>
      <SectionColumn
        title="Derniers couturiers"
        subtitle="Ce mois-ci, 6 inscriptions dont 3 validées"
      >
        <CouturierList>
          {sewers &&
            sewers.map(s => (
              <CouturierElement>
                <CouturierPhoto />
                <div>
                  <CouturierTitle>{s.name}</CouturierTitle>
                  <Subtitle>{s.registeringDate}</Subtitle>
                </div>
              </CouturierElement>
            ))}
        </CouturierList>
      </SectionColumn>
      <SectionColumn
        title="Derniers clients"
        subtitle="Ce mois-ci, 6 inscriptions dont 3 validées"
      >
        <CouturierList>
          {clients &&
            clients.map(s => (
              <CouturierElement>
                <div>
                  <CouturierTitle>{s.name}</CouturierTitle>
                  <Subtitle>{s.registeringDate}</Subtitle>
                </div>
              </CouturierElement>
            ))}
        </CouturierList>
      </SectionColumn>
    </Row>
  );
};
