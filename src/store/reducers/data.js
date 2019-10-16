import { createReducers } from 'store/helpers';
import constants from 'store/constants';

const initialState = {
  content: [],
  active: {
    content: '',
    level: 0,
  },
};

const reducer = createReducers({
  [constants.ADD_CONTENT]: (state, { content }) => {
    const newContent = [...state.content];
    const { content: parent, level } = state.active;
    newContent.push({ content, parent: parent || undefined, level });

    return {
      ...state,
      content: newContent,
      active: {
        content,
        level: level + 1,
      },
    };
  },
  [constants.CHANGE_PARENT]: (state, { content, level }) => {
    return {
      ...state,
      active: {
        content,
        level: level + 1,
      },
    };
  },
});

export default (state = initialState, action) => reducer(state, action);
