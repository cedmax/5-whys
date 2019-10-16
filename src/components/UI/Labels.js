import styled from 'styled-components';

export const ProblemLabel = styled.label`
  font-size: 20px;
  margin-right: 10px;
  text-align: left;
  height: 40px;
  display: flex;
  align-items: center;
`;
export const WhyLabel = styled.label`
  font-size: 20px;
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
  vertical-align: top;

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
