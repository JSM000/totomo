import { createAction, handleActions } from "redux-actions";

const ROOMID = "roomInfo/ROOMID";
const PROFILEID = "roomInfo/PROFILEID";

export const setRoomID = createAction(ROOMID, (roomID) => roomID);
export const setProfileID = createAction(PROFILEID, (profileID) => profileID);

const initialState = {
  roomID: "",
  profileID: "",
};

const roomInfo = handleActions(
  {
    [ROOMID]: (state, action) => ({ ...state, roomID: action.payload }),
    [PROFILEID]: (state, action) => ({ ...state, profileID: action.payload }),
  },
  initialState
);

export default roomInfo;
