'use strict';
const Schema = require('../config/config').Schema
const mongoose = require('../config/config').mongoose

const userSchema = new Schema({
    userName: { type: String, required: true, unique: true},
    password: {type: String, required: true},
    accessLimit: {type: Number, default:30},
    requestTimeStamp: [{type: Number}],
	created_at: { type: Date, default: Date.now },
});

const Users = mongoose.model('users', userSchema, 'users');
module.exports = Users;
