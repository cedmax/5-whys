import React, { useState, useCallback } from 'react';
import { Problem } from 'components/UI/Problem';
import Why from 'components/UI/Why';
import Content from 'components/Content';
import EditForm from 'components/Form/edit';
import NoteIcon from 'components/UI/NoteIcon';
import Note from 'components/Note/Note';
import { Tooltip } from 'react-tippy';

export default ({ item, draft, onEdit, onClick, onSave }) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const openTooltip = useCallback(() => setTooltipOpen(true), [setTooltipOpen]);
  const save = useCallback(
    item => {
      onSave(item);
      setTooltipOpen(false);
    },
    [onSave, setTooltipOpen]
  );
  const Body = !item.parent ? Problem : Why;
  return (
    <div key={item.content}>
      {draft.id === item.id ? (
        <EditForm parent={true} />
      ) : (
        <Body
          note={item.note}
          onEdit={() => onEdit(item)}
          onClick={() => onClick(item)}
        >
          {item.content}
          {item.parent && (
            <Tooltip
              animateFill={false}
              interactive
              position="bottom"
              trigger="click"
              open={tooltipOpen}
              html={<Note onSave={save} item={item} />}
            >
              <NoteIcon onClick={openTooltip}>+</NoteIcon>
            </Tooltip>
          )}
        </Body>
      )}
      <Content parent={item.id} />
    </div>
  );
};
