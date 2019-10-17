import React from 'react';
import { Problem } from 'components/UI/Problem';
import Why from 'components/UI/Why';
import Content from 'components/Content';
import EditForm from 'components/EditForm';

export default ({ item, draft, onEdit, onClick }) => {
  const Body = !item.parent ? Problem : Why;

  return (
    <div key={item.content}>
      {draft.id === item.id ? (
        <EditForm />
      ) : (
        <Body onEdit={() => onEdit(item)} onClick={() => onClick(item)}>
          {item.content}
        </Body>
      )}
      <Content parent={item.id} />
    </div>
  );
};
