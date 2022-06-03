import { BaseApiService } from './base-api-service.js'

const ENDPOINTS = {
  SIGN_UP: '/api/v1/users/',
  RESETPASSWORD: '/api/v1/password-reset/',
  CHANGE_PASSWORD: '/api/v1/password-reset/confirm/',
  CONFIRM_EMAIL: '/api/v1/users/activate/',
}

export class AuthApiService extends BaseApiService {
  signUp = async (loginData) => {
    const data = await this.post(ENDPOINTS.SIGN_UP, loginData)
    return data
  }

  confirmEmail = (params) => {
    return this.get(
      `${ENDPOINTS.CONFIRM_EMAIL}?user_id=${params.user_id}&confirmation_token=${params.confirmation_token}`
    )
  }

  resetPassword(payload) {
    return this.post(ENDPOINTS.RESETPASSWORD, payload)
  }

  changePassword(payload) {
    return this.post(ENDPOINTS.CHANGE_PASSWORD, payload)
  }
}
