
export default {
    successMsg: "Successfully",
    failureMsg: "Failed",
    success: (res, message, result) => {
        res.status(200).send({
            message: message,
            data: result
          })
    },
    failure: (res, message, code) => {
        res.status(code).send({
            message: message,
            code: code
          })
    }
    // getMsg: (actionName, modelName) => {

    // }
}