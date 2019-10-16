import styled from 'styled-components';

export default styled.button`
  font-size: 1.5em;
  height: 40px;
  vertical-align: top;
  cursor: pointer;
`;

export const UploadButton = styled.button`
  display: inline-block;
  background: DodgerBlue;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  margin-bottom: 10px;
  border: 0;
  font-size: 100%;
  cursor: pointer;
`;

export const DownloadButton = styled(UploadButton)`
  position: absolute;
  text-decoration: none;
  right: 10%;
  bottom: 10%;
`;
