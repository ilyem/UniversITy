'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UniversitySchema = new Schema({
    name: String,
    description: String,
    faculties: [{type: Schema.Types.ObjectId, ref: 'Faculty'}],
    active: Boolean
});

module.exports = mongoose.model('University', UniversitySchema);