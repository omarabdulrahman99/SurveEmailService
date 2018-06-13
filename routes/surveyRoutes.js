const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys');

module.exports = app => {


	app.post('/api/surveys', requireLogin, requireCredits, (req,res) => {


		const { title, subject, body, recipients } = req.body;

		const survey = new Survey({

			title:title,
			subject,
			body,
			recipients: recipients.split(',').map(email => {return { email:email.trim() }}),
			_user: req.user.id,
			dateSent: Date.now()
			 //user's id generated by mongo when created in user collection
			//split that comma separated string of recipients user submits, it returns an array of substrings, and for every string,
			//you will map, which will take each element in array, and just return it here in a new array. now have an array of recipients 
			//trim to remove any extra trailing/leading spaces.
		});
//didnt have to be a survey document here, just an object with recipients and subject.
		const mailer = new Mailer(survey, surveyTemplate(survey));
		//subject recipients, body
	});


};