import React from "react";
import styled from "styled-components/macro";
import { rem } from "polished";
import { font, space } from "const";

import { Button, Select } from "components/atoms";

const View = styled.div`
  background: #efefef;
  display: grid;
  grid-template-columns: 1fr max-content;
  column-gap: ${space.md};
  padding: ${space.s} ${space.l};
  box-sizing: border-box;
`;

const Searchbar = styled.input`
  background: transparent;
  border: none;
  font-size: ${rem(16)};
  font-weight: ${font.weight.bold};
  padding: ${space.s};
`;

const Actions = styled.div`
  display: grid;
  grid-auto-flow: column;
  column-gap: ${space.md};
`;

export const Topbar = () => (
  <View>
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
  </View>
);
