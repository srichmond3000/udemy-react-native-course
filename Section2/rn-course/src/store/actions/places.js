import * as types from './actionTypes';

export const addPlace = (placeName) => {
  return {
    type: types.ADD_PLACE,
    placeName: placeName
  };
};

export const deletePlace = () => {
  return {
    type: types.DELETE_PLACE
  };
};

export const selectPlace = (key) => {
  return {
    type: types.SELECT_PLACE,
    placeKey: key
  };
};

export const deselectPlace = () => {
  return {
    type: types.DESELECT_PLACE
  };
};