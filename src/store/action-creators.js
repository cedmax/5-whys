import { actionObject } from 'store/helpers';
import constants from 'store/constants';

export const addContent = content =>
  actionObject(constants.ADD_CONTENT, { content });

export const changeParent = item => actionObject(constants.CHANGE_PARENT, item);
export const restoreData = data => actionObject(constants.RESTORE_DATA, data);
