import { createSlice } from "@reduxjs/toolkit";
import { getUsageData } from "../api/UsageApi";
import { UsageData } from "../common/models";

interface State {
  payload: UsageData[],
  loading: boolean,
  error: boolean
};

const initialState: State = {
  payload: [],
  loading: false,
  error: false
};

const slice = createSlice({
  name: "usage",
  initialState,
  reducers: {
    fetchStart: state => {
      return Object.assign({}, state, { payload: [], loading: true });
    },
    fetchSucceed: (state, action) => {
      return Object.assign({}, state, { payload: action.payload.result, loading: false });
    },
    fetchFaild: (state, action) => {
      console.error(action.payload);
      return Object.assign({}, state, { loading: false, error: true });
    },
    clear: () => {
      return { payload: [], loading: false, error: false };
    }
  }
});

// Reducer
export default slice.reducer;

// Actions
export const { clear } = slice.actions;

// Async task
export function fetchAsync() {
  return async function(dispatch: any) {
    dispatch(slice.actions.fetchStart());

    try {
      const response = await getUsageData();
      dispatch(slice.actions.fetchSucceed(response.data));
    } catch (err) {
      dispatch(slice.actions.fetchFaild(err));
    }
  };
}
