import users from "../data/dumy/users";

export default class UserService {
    constructor() {
        this.users = users 
    }

    getAll() {
        return this.users
    }

    getBy(id) {
        return this.users.find(user => user.id === id)
    }

    add(user) {
        this.users.push(user)
    }
    update(id, name, pass) {
        var user = this.getBy(id)
        user.update(name, pass)
    }

    delete(id) {
        this.users.filter(user => user.id === id)
    }
}