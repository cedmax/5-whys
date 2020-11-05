import React, { memo, Fragment } from 'react';
import { Problem, EnableCloud } from 'components/UI/Problem';
import Why from 'components/UI/Why';
import Content from 'components/Content';
import EditForm from 'components/Form/edit';
import CloudIconDisabled from 'components/UI/CloudIconDisabled';
import CloudIconEnabled from 'components/UI/CloudIconEnabled';
import useCopy from '@react-hook/copy';

const Body = memo(({ item, cloud, draft, onEdit, onClick, onCloudEnabled }) => {
  const isEdit = draft.id === item.id;
  const isTopLevel = !item.parent;

  const { copied, copy, reset } = useCopy(document.location.href);

  if (isEdit) {
    return <EditForm parent={true} />;
  } else if (isTopLevel) {
    return (
      <Fragment>
        <Problem onClick={() => onClick(item)}>{item.content}</Problem>
        <EnableCloud
          onMouseOut={reset}
          onClick={!cloud ? onCloudEnabled : copy}
        >
          <span role="img" aria-label="Clound Sync">
            {!cloud ? <CloudIconDisabled /> : <CloudIconEnabled />}
          </span>

          <span>
            {!cloud
              ? 'Enable cloud sync'
              : !copied
              ? 'Cloud sync enabled, click to copy link'
              : 'Link copied'}
          </span>
        </EnableCloud>
      </Fragment>
    );
  } else {
    return (
      <Why onEdit={() => onEdit(item)} onClick={() => onClick(item)}>
        {item.content}
      </Why>
    );
  }
});

export default ({ item, ...props }) => {
  return (
    <div key={item.content}>
      <Body {...props} item={item} />
      <Content parent={item.id} />
    </div>
  );
};
