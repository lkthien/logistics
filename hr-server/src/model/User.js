export default class User {
  constructor(id, name, pass) {
    this.id = id
    this.name = name
    this.pass = pass
  }

  update(name, pass) {
      this.name = name
      this.pass = pass
  } 

  static create(body) {
      return new User(body.id, body.name, body.pass)
  }
}