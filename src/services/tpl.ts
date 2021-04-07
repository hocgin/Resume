import request from '@/utils/request';
import {stringify} from 'qs';

export default class TplApi {

  static insert(payload: any) {
    return request(`/api/worked`, {
      method: 'POST',
      body: {
        ...payload,
      },
    });
  }

  static delete({id, ...payload}: any) {
    let queryString = stringify(payload);
    return request(`/api/worked/${id}?${queryString}`, {
      method: 'DELETE',
    });
  }

  static update({id, ...payload}: any) {
    return request(`/api/worked/${id}`, {
      method: 'PUT',
      body: {
        ...payload,
      },
    });
  }

  static paging(payload: any) {
    return request(`/api/worked/_paging`, {
      method: 'POST',
      body: {
        ...payload,
      },
    });
  }

  static getAll(payload: any) {
    return request(`/api/worked/all`, {
      method: 'POST',
      body: {
        ...payload,
      },
    });
  }

  static getOne({id, ...payload}: any) {
    return request(`/api/worked/${id}`, {
      method: 'GET',
    });
  }

}
