export const getContent = ({ data: { content } }, { parent: currentParent }) =>
  content.filter(({ parent }) => parent === currentParent);

export const getAllContent = ({ data: { content } }) => content;

export const getActiveNode = ({ data: { active } }) => active;

export const getDraft = ({ data: { draft } }) => draft;
