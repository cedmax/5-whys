import { createReducers } from 'store/helpers';
import constants from 'store/constants';

const initialState = {
  content: [],
  active: {
    id: '',
  },
};

const generateID = () => (+new Date()).toString(36).slice(-8);

const reducer = createReducers({
  [constants.ADD_CONTENT]: (state, { content }) => {
    const newContent = [...state.content];
    const id = generateID();
    const { id: parentId } = state.active;
    newContent.push({ id, content, parent: parentId || undefined });

    return {
      ...state,
      content: newContent,
      active: {
        id,
      },
    };
  },
  [constants.CHANGE_PARENT]: (state, { id }) => {
    return {
      ...state,
      active: {
        id,
      },
    };
  },
  [constants.RESTORE_DATA]: (state, data) => {
    return {
      content: data,
      active: {
        id: data.find(item => !item.parent).id,
      },
    };
  },
});

export default (state = initialState, action) => reducer(state, action);
