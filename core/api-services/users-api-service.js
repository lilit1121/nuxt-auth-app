import { BaseApiService } from './base-api-service.js'

const ENDPOINTS = {
  GET_USERS: '/app/v1/users/?',
}

export class UsersApiService extends BaseApiService {
  async getUsers() {
    const { data } = await this.get(ENDPOINTS.GET_USERS)
    return data.users
  }
}
