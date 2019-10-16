export const getContent = (
  { data: { content } },
  { level: currentLevel, parent: currentParent }
) =>
  content.filter(
    ({ level, parent }) => level === currentLevel && parent === currentParent
  );

export const getActiveNode = ({ data: { active } }) => active;
