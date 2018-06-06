const passport = require('passport');

module.exports = (app) => {

app.get('/auth/google', passport.authenticate('google', {

	scope: ['profile', 'email'] //ask for specific pieces of user account

 })
)

app.get('/auth/google/callback', passport.authenticate('google'))//here passport will see that there is a code in the url and wont see it as first time authentication. will exchange code in the url for user profile info.


app.get('/api/logout', (req, res) => {

	req.logout(); //kills the cookie
	res.send(req.user);

})

app.get('/api/current_user', (req, res) => {

	res.send(req.user);

   });
};