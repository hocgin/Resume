export default {
  namespace: 'tpl',
  state: {
    all: [],
  },
  effects: {
    // 获取所有
    * getAll({payload = {}, callback}: any, {call, put}: any) {
      let result = {}; // API
    }
  },
  reducers: {
    fillAll(state: object, {payload}: any) {
      return {...state, all: payload};
    },
  },
  subscriptions: {},
};
