import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { getLastSewersRegistered } from "services/sewer";
import { space, radius, color } from "const";

import { Title, Subtitle } from "components/atoms";

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

export const HomeApp = () => {
  const [sewers, setSewers] = useState(null);
  const getLastSewers = () => {
    getLastSewersRegistered().then(respValue => setSewers(respValue));
  };

  useEffect(() => {
    getLastSewers();
  });

  return (
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
  );
};
