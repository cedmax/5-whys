import styled from 'styled-components';

export const ProblemLabel = styled.label`
  font-size: 20px;
  margin-right: 10px;
  text-align: left;
  height: 40px;
  display: flex;
  align-items: center;
`;

export const Problem = styled.button`
  display: inline-block;
  background: red;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  margin-bottom: 10px;
  border: 0;
  font-size: 100%;
  cursor: pointer;
`;

export const EnableCloud = styled.button`
  display: inline-block;
  background: transparent;
  color: white;
  vertical-align: top;
  border: 0;
  cursor: pointer;
  padding: 5px;

  &:hover {
    color: black;
  }
  svg {
    width: 30px;
  }
  span {
    vertical-align: middle;
    display: inline-block;
    margin-right: 3px;
  }
`;
