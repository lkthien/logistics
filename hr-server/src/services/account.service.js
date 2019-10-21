import Account from '../data/mongo/account.mongose'

export default {
    
    findAll: () => {
        return Account.find()
    },
    findById: (id) => {
        return Account.find({_id: id})
    },
    add: (reqBody) => {
        return new Account(reqBody);
    },
    update: (id, name, pass) => {
        findById(id).then(account => {
            account.name = name
            account.pass = pass
            account.save()
        })
    }
}