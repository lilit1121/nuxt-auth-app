import { BaseModel } from '@Models/base.model'

export class Users extends BaseModel {
    constructor(data) {
      super(data)
    }
    makeUserActive(user){
      user.active = true  
    }
}
