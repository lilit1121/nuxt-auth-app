import { BaseApiService } from './base-api-service.js'
const ENDPOINTS = {
  CATS: '/v1/images/search'
}

export class CatsApiService extends BaseApiService {
  async getCats() {
    const { data } = await this.get(ENDPOINTS.CATS)

    return data
  }
}
