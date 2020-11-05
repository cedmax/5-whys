import React, { memo, Fragment } from 'react';
import { Problem, EnableCloud } from 'components/UI/Problem';
import Why from 'components/UI/Why';
import Content from 'components/Content';
import EditForm from 'components/Form/edit';
import CloudIconDisabled from 'components/UI/CloudIconDisabled';
import CloudIconEnabled from 'components/UI/CloudIconEnabled';
import copy from 'copy-to-clipboard';

const copyToClipboard = () => {
  copy(document.location.href);
};

const Body = memo(({ item, cloud, draft, onEdit, onClick, onCloudEnabled }) => {
  const isEdit = draft.id === item.id;
  const isTopLevel = !item.parent;

  if (isEdit) {
    return <EditForm parent={true} />;
  } else if (isTopLevel) {
    return (
      <Fragment>
        <Problem onClick={() => onClick(item)}>{item.content}</Problem>
        <EnableCloud onClick={!cloud ? onCloudEnabled : copyToClipboard}>
          <span role="img" aria-label="Clound Sync">
            {!cloud ? <CloudIconDisabled /> : <CloudIconEnabled />}
          </span>

          <span>
            {!cloud
              ? 'Enable cloud sync'
              : 'Cloud sync enabled, click to copy link'}
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
