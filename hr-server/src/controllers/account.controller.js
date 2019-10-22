import Account from '../models/account.model'
import resHelper from '../helpers/res.helper'

export default {

    findAll(req, res, next) {
        let actions = "Find All Account "
        Account.find().then(docs => {
            resHelper.success(res, actions + resHelper.successMsg, docs)
        }).catch(err => next(err))
    },

    findById(req, res, next) {
        let id = req.params.id
        let actions = "Find Account By ID: " + id + " "
        Account.find({ _id: id }).then(docs => {
            resHelper.success(res, actions + resHelper.successMsg, docs)
        }).catch(err => next(err))
    },

    add(req, res, next) {
        let actions = "Add Account"
        let account = new Account(req.body)
        account.save().then(doc => {
            resHelper.success(res, actions + resHelper.successMsg, doc)
        }).catch(err => next(err))
    },

    update(req, res, next) {
        let id = req.params.id
        let actions = "Update Account ID: " + id + " "

        let filter = { _id: id }
        let update = {
            name: req.body.name,
            pass: req.body.pass
        }

        Account.findByIdAndUpdate(filter, update).then(doc => {
            if (!doc) {
                resHelper.failure(res, actions + " Not found ", 404)
            } else {
                resHelper.success(res, actions + resHelper.successMsg, doc)
            }
        }).catch(err => next(err))

    },

    delete(req, res, next) {
        let id = req.params.id
        let actions = "Delete Account ID: " + id + " "

        Account.findOneAndDelete({ _id: id }).then(doc => {
            if (!doc) {
                resHelper.failure(res, actions + resHelper.failureMsg + "- Not found -", 404)
            } else {
                resHelper.success(res, actions + resHelper.successMsg, doc)
            }
        }).catch(err => next(err))
    }
}
