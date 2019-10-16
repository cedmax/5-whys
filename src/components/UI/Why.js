import React from 'react';
import styled from 'styled-components';

export const WhyLabel = styled.label`
  display: inline-flex;
  vertical-align: top;
  align-items: center;
  height: 40px;
  position: relative;
  background: DarkOrange;
  color: white;
  padding: 0 10px;
  margin-left: 18px;
  margin-bottom: 10px;
  margin-right: 5px;
  border: 0;
  font-size: 100%;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -18px;
    display: inline-block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 20px 0 20px 18px;
    border-color: DarkOrange DarkOrange DarkOrange transparent;
  }

  &::after {
    border-width: 20px 0 20px 18px;
    right: -18px;
    left: auto;
    border-color: transparent DarkOrange transparent DarkOrange;
  }
`;

const Content = styled(WhyLabel)`
  background: ForestGreen;

  &::before,
  &::after {
    border-color: ForestGreen ForestGreen ForestGreen transparent;
  }

  &::after {
    border-color: transparent ForestGreen transparent ForestGreen;
  }
`;

const Why = styled(WhyLabel)`
  cursor: pointer;

  &::before,
  &::after {
    border-color: DarkOrange DarkOrange DarkOrange transparent;
  }

  &::after {
    border-color: transparent DarkOrange transparent DarkOrange;
  }
`;

export const Wrapper = styled.div`
  display: flex;
`;

export default ({ children, onClick }) => (
  <Wrapper>
    <Why as="button" onClick={onClick}>
      Why?
    </Why>
    <Content as="span">{children}</Content>
  </Wrapper>
);
