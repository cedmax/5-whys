import React, { useCallback } from 'react';
import Form from 'components/Form';
import { Problem } from 'components/UI/Problem';
import Why from 'components/UI/Why';
import Indent from 'components/UI/Indent';
import Content from '../Content';

export default ({ parent, content, changeParent, level }) => {
  const onClick = useCallback(
    item => {
      changeParent(item);
    },
    [changeParent]
  );

  return (
    <Indent level={level}>
      {content.length > 0 &&
        content.map(item => {
          const Body = level === 0 ? Problem : Why;
          return (
            <div key={item.content}>
              <Body onClick={() => onClick(item)}>{item.content}</Body>
              <Content level={level + 1} parent={item.content} />
            </div>
          );
        })}
      <Form level={level} parent={parent} />
    </Indent>
  );
};
