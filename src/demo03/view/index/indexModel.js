import { delay } from "redux-saga";
export default {
  namespace: "index",
  state: {
    name: "Tim"
  },
  reducers: {
    update: function(state, { payload }) {
      return { ...state, name: payload.name };
    }
  },
  sagas: {
    *updateNameAsync({ payload }, effects) {
      yield delay(1000);
      yield effects.put({
        type: "update",
        payload
      });
    }
  }
};
