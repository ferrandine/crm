import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import { rem } from "polished";
import { getLastSewersRegistered } from "services/sewer";
import { getLastCustomersRegistered } from "services/customer";
import { space, radius, color } from "const";
import { Title as Heading, Subtitle } from "components/atoms";
import { Page } from "components/organisms";

const Column = styled.div`
  background: #fff;
  padding: ${space.md} ${space.md};
  border-radius: ${radius.big};
  overflow: auto;
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

const Picture = styled.img`
  display: block;
  width: 40px;
  height: 40px;
  background: lightgrey;
  border-radius: ${radius.big};
  margin-right: ${space.base};
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: min-content;
  gap: ${space.xl};
`;

const SectionColumn = ({ title, subtitle, children }) => {
  return (
    <Column>
      <HeadColumn>
        <div>
          <Heading type="h3">{title}</Heading>
          <Subtitle>{subtitle}</Subtitle>
        </div>
      </HeadColumn>
      {children}
    </Column>
  );
};

export const Home = () => {
  const [sewers, setSewers] = useState([]);

  useEffect(() => {
    getLastSewersRegistered().then(setSewers);
  }, []);

  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getLastCustomersRegistered().then(setCustomers);
  }, []);

  return (
    <Page>
      <Container>
      <SectionColumn
        title="Derniers couturiers"
        subtitle="Ce mois-ci, 6 inscriptions dont 3 validées"
      >
        <CouturierList>
          {sewers.slice(0,6).map(s => (
              <CouturierElement>
                <Picture src={s.picture}/>
                <div>
                  <div>{`${s.first_name} ${s.last_name}`}</div>
                  <Subtitle>{s.registeringDate}</Subtitle>
                </div>
              </CouturierElement>
            ))}
        </CouturierList>
      </SectionColumn>
      <SectionColumn
        title="Derniers customers"
        subtitle="Ce mois-ci, 6 inscriptions dont 3 validées"
      >
        <CouturierList>
          {customers.map(c => (
              <CouturierElement>
                <div>
                  <div>{c.name}</div>
                  <Subtitle>{c.registeringDate}</Subtitle>
                </div>
              </CouturierElement>
            ))}
        </CouturierList>
      </SectionColumn>
    </Container>
    </Page>
  );
};
