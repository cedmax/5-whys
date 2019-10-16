import styled from 'styled-components';

export default styled.input`
  font-size: 1.5em;
  height: 40px;
  padding-left: ${({ isProblem }) => (isProblem ? '0' : '18px')};
  border: 1px solid #ccc;
  border-left: ${({ isProblem }) => (isProblem ? '1px solid #ccc' : 'none')};
`;
