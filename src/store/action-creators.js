import { actionObject } from 'store/helpers';
import constants from 'store/constants';

export const addContent = (item) => actionObject(constants.ADD, item);
export const typeValue = (item) => actionObject(constants.TYPE, item);
export const editContent = (item) => actionObject(constants.EDIT, item);
export const enableCloud = () => actionObject(constants.CLOUD);
export const saveContent = (item) => actionObject(constants.SAVE, item);
export const changeParent = (item) =>
  actionObject(constants.CHANGE_PARENT, item);
export const restoreData = (data) => actionObject(constants.RESTORE_DATA, data);
