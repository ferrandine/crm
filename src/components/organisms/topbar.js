import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import { font, space } from "const";

import { Button, Select } from "components/atoms";

const View = styled.div`
  background: #efefef;
  padding: ${space.sm} ${space.lg};
  box-sizing: border-box;
`;

const Searchbar = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  font-size: ${rem(16)};
  font-weight: ${font.weight.bold};
`;

export const Topbar = () => (
  <View>
    <Searchbar
      type="text"
      placeholder="Rechercher un couturier, un client..."
    />
      <Button type="secondary">Notifications</Button>
      <Select>
        <option value="dog">Marcel Sembat</option>
        <option value="cat">Modifier mon profil</option>
        <option value="hamster">Se déconnecter</option>
      </Select>
  </View>
);
