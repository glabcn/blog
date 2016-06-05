'use strict';

const mongoose = require('mongoose');
const crypto = require('crypto');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
	name: { type: String, default: '' },
	email: { type: String, default: '' },
	username: { type: String, default: '' },
	provider: { type: String, default: '' },
	hashed_password: { type: String, default: '' },
	salt: { type: String, default: '' },
	authToken: { type: String, default: '' },
	github: {}
});

UserSchema.virtual('password').set(function (password) {
	this._password = password;
	this.salt = this.makeSalt();
	this.hashed_password = this.encryptPassword(password);
}).get(function () {
	return this._password;
});