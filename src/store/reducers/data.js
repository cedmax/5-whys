import { createReducers } from 'store/helpers';
import constants from 'store/constants';

const initialState = {
  content: [],
  cloud: false,
  active: '',
  draft: {},
  currentValue: '',
};

const generateID = () => (+new Date()).toString(36).slice(-8);

const reducer = createReducers({
  [constants.CLOUD]: (state) => {
    return {
      ...state,
      cloud: true,
    };
  },
  [constants.SYNC]: (state, payload) => {
    const { currentValue, draft, active } = state;

    const newActive = active || payload.content[0].id;

    return {
      ...state,
      ...payload,
      currentValue,
      draft,
      cloud: true,
      active: newActive,
    };
  },
  [constants.ADD]: (state, { content }) => {
    const newContent = [...state.content];
    const id = generateID();
    newContent.push({ id, content, parent: state.active || null });

    return {
      ...state,
      currentValue: '',
      content: newContent,
      active: id,
    };
  },
  [constants.CHANGE_PARENT]: (state, { id }) => {
    return {
      ...state,
      active: id,
    };
  },
  [constants.RESTORE_DATA]: (state, data) => {
    return {
      ...state,
      content: data,
      active: data.find((item) => !item.parent).id,
    };
  },
  [constants.TYPE]: (state, value) => {
    return {
      ...state,
      currentValue: value,
    };
  },
  [constants.EDIT]: (state, { id }) => {
    return {
      ...state,
      draft: state.content.find((item) => item.id === id),
    };
  },
  [constants.SAVE]: (state, draft) => {
    const contentDraftIndex = state.content.findIndex((item) => item.id === draft.id);
    const newContent = [
      ...state.content.slice(0, contentDraftIndex),
      draft,
      ...state.content.slice(contentDraftIndex + 1),
    ];
    return {
      ...state,
      content: newContent,
      draft: {},
    };
  },
});

export default (state = initialState, action) => reducer(state, action);
