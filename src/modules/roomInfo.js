import { createAction, handleActions } from "redux-actions";

const ROOMID = "roomInfo/ROOMID";

export const setRoomID = createAction(ROOMID, (roomID) => roomID);

const initialState = {
  roomID: "",
};

const roomInfo = handleActions(
  {
    [ROOMID]: (state, action) => ({ roomID: action.payload }),
  },
  initialState
);

export default roomInfo;
