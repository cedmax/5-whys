import React from 'react';
import Form from 'components/Form';
import Indent from 'components/UI/Indent';
import SingleItem from './SingleItem';

export default ({
  draft,
  parent,
  content,
  changeParent,
  editContent,
  saveContent,
}) => (
  <Indent>
    {content.length > 0 &&
      content.map(item => (
        <SingleItem
          key={item.id}
          item={item}
          draft={draft}
          onEdit={editContent}
          onClick={changeParent}
          onSave={saveContent}
        />
      ))}
    <Form parent={parent} />
  </Indent>
);
