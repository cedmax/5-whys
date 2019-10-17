import { actionObject } from 'store/helpers';
import constants from 'store/constants';

export const addContent = content => actionObject(constants.ADD, content);
export const editContent = content => actionObject(constants.EDIT, content);
export const saveContent = content => actionObject(constants.SAVE, content);
export const changeParent = item => actionObject(constants.CHANGE_PARENT, item);
export const restoreData = data => actionObject(constants.RESTORE_DATA, data);
