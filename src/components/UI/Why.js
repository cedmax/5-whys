import React from 'react';
import styled from 'styled-components';

const Content = styled.span`
  display: inline-flex;
  align-items: center;
  height: 40px;
  position: relative;
  background: ForestGreen;
  color: white;
  padding: 0 10px;
  margin-left: 18px;
  margin-bottom: 10px;
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
    border-color: ForestGreen ForestGreen ForestGreen transparent;
  }

  &::after {
    border-width: 20px 0 20px 18px;
    right: -18px;
    left: auto;
    border-color: transparent ForestGreen transparent ForestGreen;
  }
`;

const Why = styled.button`
  display: inline-flex;
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

export default ({ children, onClick }) => (
  <>
    <Why onClick={onClick}>Why?</Why>
    <Content>{children}</Content>
  </>
);
