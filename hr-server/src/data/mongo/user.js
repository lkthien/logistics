import mongoose from 'mongoose'

const Schema = mongoose.Schema
const UserSchema = new Schema({
    name: Schema.Types.String,
    pass: Schema.Types.String
})
UserSchema.set('autoIndex', true)
const User = mongoose.model('user', UserSchema)

export default User;