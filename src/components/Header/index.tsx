import React from 'react';

import { IconButton } from '../IconButton';

import { Container, Greeting, Title, SubTitle } from './styles';

export function Header() {

  return (
    <Container>
      <Greeting>
        <Title>CFG Teste</Title>
        <SubTitle>City Football Group</SubTitle>
      </Greeting>

      <IconButton icon="logout" />
    </Container>
  );
}
