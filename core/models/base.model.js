export class BaseModel {
  constructor(data) {
    Object.assign(this, data)
  }
  update(data) {
    Object.assign(this, data)
    return this
  }
}
