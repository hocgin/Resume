import request from '@/utils/request';
import userinfo from '@/services/data-userinfo';

export default class AppService {

  static getUserinfo(payload: any) {
    return userinfo;
  }

}
