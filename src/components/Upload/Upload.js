import React, { useCallback } from 'react';
import { UploadButton } from 'components/UI/Button';
import Indent from 'components/UI/Indent';

export default ({ content, restoreData }) => {
  const onChange = useCallback(
    (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = (event) => {
        const data = JSON.parse(event.target.result);
        restoreData(data);
      };

      // Read in the image file as a data URL.
      reader.readAsText(file);
    },
    [restoreData]
  );

  return (
    !content.length && (
      <Indent style={{ marginTop: '10px' }}>
        or{' '}
        <UploadButton as="label" htmlFor="file">
          Upload
        </UploadButton>
        <input onChange={onChange} type="file" id="file" style={{ display: 'none' }} /> a previously saved analysis
      </Indent>
    )
  );
};
