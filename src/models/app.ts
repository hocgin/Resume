import AppService from '@/services/app';

export default {
  namespace: 'app',
  state: {
    all: [],
    userinfo: {}
  },
  effects: {
    * getUserinfo({payload = {}, callback}: any, {call, put}: any) {
      let result = yield AppService.getUserinfo(payload);
      yield put({type: 'fillUserinfo', payload: result});
    }
  },
  reducers: {
    fillUserinfo(state: object, {payload}: any) {
      return {...state, userinfo: payload};
    },
  },
  subscriptions: {},
};
