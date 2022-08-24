import { AuthApiService, UsersApiService, CatsApiService } from '../core/api-services/index'

export default (ctx, inject) => {
  const apiServices = {
    auth: new AuthApiService(ctx.$axios),
    users: new UsersApiService(ctx.$axios),
    cats: new CatsApiService(ctx.$axios)
  }
  
  inject('apiServices', apiServices)
}
