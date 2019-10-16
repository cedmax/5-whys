import styled from 'styled-components';

export default styled.div`
  margin: 0 0 10px ${({ level }) => `${level * 12}px`};

  :empty {
    display: none;
  }
`;
