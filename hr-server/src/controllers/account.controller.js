import service from '../services/account.service'

const successMessage = "successfully"
const failureMessage = "Failed"
const success = (res, message, result) => {
    res.status(200).send({
        message: message,
        data: result
      })
}

const failure= (res, message, code ) => {
    res.status(code).send({
        message: message,
        data: result
      })
}

export default {
    
    findAll(req, res, next) {
        service.findAll().then(accounts => {
            success(res, "Get All Accounts " + successMessage, accounts)
        }).catch(err => {
            failure(res, err.message, err.code)
            next(err)
        })
    },
    findById(req, res, next) {

    },
    add(req, res, next) {
        service.add(req.body).save().then(user =>{
            success(res, "Add Account " + successMessage, user)
        }).catch(err => {
            failure(res, err.message, err.code)
            next(err)
        })
    },
    update(req, res, next) {

    },
    delete(req, res, next) {

    },
    remove() {

    }
}