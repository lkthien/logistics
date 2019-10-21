import UserService from "../service/UserServices";

var service = new UserService();

export default {
    index: (req, res, next) => {
        res.status(200).send({
            success: 'true',
            message: 'Retrieved successfully',
            data: service.getAll()
          })
    }
}