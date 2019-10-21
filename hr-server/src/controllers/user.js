import UserService from "../services/user";
import User from "../data/mongo/user";

var service = new UserService();

export default {
    index: (req, res, next) => {
        User.find({}).then(users =>{
            console.log(users) 
            res.status(200).send({
                success: 'true',
                message: 'Retrieved successfully',
                data: users
              })
        }).catch(err => {
            console.log(err)
        }) 
    },

    add: (req, res, next) => {
        console.log(req.body);
        const user = new User(req.body)
        console.log(user);
        user.save().then(user => {
            console.log(user)
            res.status(200).send({
                message: 'Success'
            })
        }).catch(err => {
            console.log(err)
            next(err)
        })
    }
}