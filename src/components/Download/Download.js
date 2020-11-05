import React from 'react';
import { DownloadButton } from 'components/UI/Button';

const Download = ({ content }) => {
  const href = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(content));

  return (
    content.length > 0 && (
      <DownloadButton as="a" download="5whys.json" href={href}>
        Download
      </DownloadButton>
    )
  );
};

export default Download;
