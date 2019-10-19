import React, { useState, useCallback } from 'react';
import { DraftailEditor, BLOCK_TYPE, INLINE_STYLE } from 'draftail';
import { draftjsToMd } from 'draftjs-md-converter';
import Button from 'components/UI/Button';

const toHTML = raw => (raw ? draftjsToMd(raw) : '');

export default ({ item, onSave }) => {
  const [current, setCurrent] = useState(item.note);
  const onChange = useCallback(
    noteValue => {
      setCurrent(noteValue);
    },
    [setCurrent]
  );
  const saveNote = useCallback(
    () => onSave({ ...item, note: toHTML(current) }),
    [onSave, item, current]
  );
  return (
    <>
      <DraftailEditor
        showPreview={false}
        rawContentState={current}
        onSave={onChange}
        blockTypes={[
          { type: BLOCK_TYPE.HEADER_ONE },
          { type: BLOCK_TYPE.HEADER_TWO },
          { type: BLOCK_TYPE.HEADER_THREE },
          { type: BLOCK_TYPE.UNORDERED_LIST_ITEM },
        ]}
        inlineStyles={[
          { type: INLINE_STYLE.BOLD },
          { type: INLINE_STYLE.ITALIC },
        ]}
      />
      <Button onClick={saveNote}>Save</Button>
    </>
  );
};
