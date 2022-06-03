export const GET = 'get'
export const POST = 'post'
export const PUT = 'put'
export const DELETE = 'delete'
export const PATCH = 'patch'

let requestCounter = 0

export class BaseApiService {
  constructor(axios) {
    this.axios = axios
    this.baseUrl = `${process.env.BASE_API_URL}`
    axios.defaults.baseURL = this.baseUrl
  }

  get(url, data, options) {
    return this.fetch({ method: GET, url, data, options })
  }

  post(url, data, options) {
    return this.fetch({ method: POST, url, data, options })
  }

  put(url, data, options) {
    return this.fetch({ method: PUT, url, data, options })
  }

  delete(url, options) {
    return this.fetch({ method: DELETE, url, options })
  }

  patch(url, data, options) {
    return this.fetch({ method: PATCH, url, data, options })
  }

  fetch({ method, url, data, options }) {
    if (this.baseUrl) {
      url = `${this.baseUrl}${url}`
    }
    if (process.client) {
      requestCounter++
    }
    return this.axios[method](url, data, options).finally(() => {
      if (process.client) {
        requestCounter--
        if (!requestCounter) {
          window.$nuxt.$loading.finish()
        }
      }
    })
  }
}
