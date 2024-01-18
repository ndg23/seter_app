// trainjs
export const LOAD_TRAINS = 'LOAD_TRAINS';
export const UPDATE_TRAIN = 'UPDATE_TRAIN';
export const CREATE_TRAIN = 'CREATE_TRAIN';
export const CANCEL_TRAIN = 'CANCEL_TRAIN';

// trainActions.js

export const loadPrograms = (trains) => ({
  type: LOAD_TRAINS,
  payload: trains,
});

export const updateUser = (trainId, updatedData) => ({
  type: UPDATE_TRAIN,
  payload: { trainId, updatedData },
});

export const create = (newTrainData) => ({
  type: CREATE_TRAIN,
  payload: newTrainData,
});

export const cancelTrain = (trainId) => ({
  type: CANCEL_TRAIN,
  payload: trainId,
});
