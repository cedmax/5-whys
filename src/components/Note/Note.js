import React, { useState, useCallback, useEffect, useRef } from 'react';
import Stackedit from 'stackedit-js';
import Button from 'components/UI/Button';
import TextArea, { Buttons } from 'components/UI/TextArea';

export default ({ item, onSave }) => {
  const el = useRef();
  const [current, setCurrent] = useState(item.note);
  console.log(current);
  const [stackEdit, setStackEdit] = useState(null);
  const saveNote = useCallback(() => onSave({ ...item, note: current }), [
    onSave,
    item,
    current,
  ]);

  useEffect(() => {
    if (el.current) {
      const stackedit = new Stackedit();
      stackedit.on('fileChange', file => {
        setCurrent(file.content.text);
      });
      setStackEdit(stackedit);
    }
  }, [el, setCurrent]);

  return (
    <>
      <TextArea
        ref={el}
        value={current}
        onChange={e => setCurrent(e.target.value)}
      />
      <Buttons>
        <Button
          onClick={() =>
            stackEdit.openFile({
              content: {
                text: current, // and the Markdown content.
              },
            })
          }
        >
          Editor
        </Button>
        <Button onClick={saveNote}>Save</Button>
      </Buttons>
    </>
  );
};
