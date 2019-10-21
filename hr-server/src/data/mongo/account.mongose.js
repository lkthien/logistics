import mongoose, {Schema} from 'mongoose'

const schema = new Schema({
    name: Schema.Types.String,
    pass: Schema.Types.String
})

schema.set('autoIndex', true)

const Account = mongoose.model('account', schema)
export default Account;