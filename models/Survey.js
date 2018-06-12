const mongoose = require('mongoose');
const { Schema } = mongoose;
const RecipientSchema = require('./Recipient');

const surveySchema = new Schema({

	title: String,
	body: String,
	subject: String,
	recipients: [RecipientSchema], //array of this. embedded doc.
	yes: {type: Number, default:0},
	no: {type: Number, default:0},
	_user: { type: Schema.Types.ObjectId, ref:'User' },
	dateSent: Date,
	lastResponded: Date //last time someone responded to this survey 


});


mongoose.model('surveys', surveySchema);