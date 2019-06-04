import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import { font, space } from "const";

import { Button, Select } from "components/atoms";

const TopbarStyle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: #efefef;
  padding: ${space.sm} ${space.lg};
  box-sizing: border-box;
  margin-bottom: ${rem(40)};
`;

const Searchbar = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  font-size: ${rem(16)};
  font-weight: ${font.weight.bold};
  outline: none;
`;

const Actions = styled.div`
  display: flex;
  ${Button} {
    margin-right: ${space.base};
  }
`;

export const Topbar = () => (
  <TopbarStyle>
    <Searchbar
      type="text"
      placeholder="Rechercher un couturier, un client..."
    />
    <Actions>
      <Button type="secondary">Notifications</Button>
      <Select>
        <option value="dog">Marcel Sembat</option>
        <option value="cat">Modifier mon profil</option>
        <option value="hamster">Se déconnecter</option>
      </Select>
    </Actions>
  </TopbarStyle>
);
