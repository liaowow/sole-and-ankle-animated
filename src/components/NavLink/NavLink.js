import React from 'react';
import styled from 'styled-components';

import { WEIGHTS } from '../../constants';

const NavLink = ({ children, ...delegated }) => {
  return (
    <Wrapper {...delegated}>
    <MainText>{children}</MainText>
    <HoverText>{children}</HoverText>
    </Wrapper>
  )
};

const Wrapper = styled.a`
  position: relative;
  display: block;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  overflow: hidden;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Text = styled.span`
  display: block;
`;

const MainText = styled(Text)`
  transform: translateY(0%);
  transition: transform 500ms;
  
  ${Wrapper}:hover & {
    transform: translateY(-100%);
  }
`;

const HoverText = styled(Text)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-weight: bold;
  transform: translateY(100%);
  transition: transform 250ms;
  
  ${Wrapper}:hover & {
    transform: translateY(0%);
  }
`;

export default NavLink;