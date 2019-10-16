import React, { useCallback } from 'react';
import Form from 'components/Form';
import { Problem } from 'components/UI/Problem';
import Why from 'components/UI/Why';
import Indent from 'components/UI/Indent';
import Content from '../Content';

export default ({ parent, content, changeParent }) => {
  const onClick = useCallback(item => changeParent(item), [changeParent]);

  return (
    <Indent>
      {content.length > 0 &&
        content.map(item => {
          const Body = !item.parent ? Problem : Why;
          return (
            <div key={item.content}>
              <Body onClick={() => onClick(item)}>{item.content}</Body>
              <Content parent={item.id} />
            </div>
          );
        })}
      <Form parent={parent} />
    </Indent>
  );
};
