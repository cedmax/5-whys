import React, { useCallback } from 'react';
import Form from 'components/Form';
import Indent from 'components/UI/Indent';
import SingleItem from './SingleItem';

export default ({ draft, parent, content, changeParent, editContent, enableCloud, cloud }) => {
  const onClick = useCallback((item) => changeParent(item), [changeParent]);
  const onEdit = useCallback((item) => editContent(item), [editContent]);

  return (
    <Indent>
      {content.length > 0 &&
        content.map((item) => (
          <SingleItem
            cloud={cloud}
            key={item.id}
            item={item}
            draft={draft}
            onEdit={onEdit}
            onClick={onClick}
            onCloudEnabled={enableCloud}
          />
        ))}
      <Form parent={parent} />
    </Indent>
  );
};
