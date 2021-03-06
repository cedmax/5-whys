import React from 'react';
import styled from 'styled-components';

export const WhyLabel = styled.label`
  display: inline-flex;
  vertical-align: top;
  align-items: center;
  height: 40px;
  position: relative;
  background: #ff6700;
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
    border-color: #ff6700 #ff6700 #ff6700 transparent;
  }

  &::after {
    border-width: 20px 0 20px 18px;
    right: -18px;
    left: auto;
    border-color: transparent #ff6700 transparent #ff6700;
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

const WhyBlock = styled(WhyLabel)`
  cursor: pointer;

  &::before,
  &::after {
    border-color: #ff6700 #ff6700 #ff6700 transparent;
  }

  &::after {
    border-color: transparent #ff6700 transparent #ff6700;
  }
`;

export const Wrapper = styled.div`
  display: flex;
`;

const Edit = styled.button`
  background: transparent;
  border: 0;
  margin: 17px 5px 0;
`;

const Why = ({ children, onClick, onEdit }) => (
  <Wrapper>
    <WhyBlock as="button" onClick={onClick}>
      Why?
    </WhyBlock>
    <Content as="span">{children}</Content>
    <Edit onClick={onEdit}>edit</Edit>
  </Wrapper>
);
export default Why;
