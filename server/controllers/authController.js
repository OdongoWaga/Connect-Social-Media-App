exports.validateSignup = (req, res, next) => {
	req.sanitizeBody("name");
	req.sanitizeBody("email");
	req.sanitizeBody("password");

	//Name is non-null and is 4 to 10 characters long
	req.checkBody("name", "Enter A Name").notEmpty();
	req
		.checkBody("name", "Name must be between 4 and 10 characters")
		.isLength({ min: 4, max: 10 });

	//Email is non-null, valid and normalized

	req
		.checkBody("email", "Enter a valid email")
		.isEmail()
		.normalizeEmail();

	//Password is non-null and is 4 to 10 characters long

	req.checkBody("name", "Enter A Name").notEmpty();
	req
		.checkBody("name", "Name must be between 4 and 10 characters")
		.isLength({ min: 4, max: 10 });

	const errors = req.validationErrors();
	if (errors) {
		const firstError = errors.map((error) => error.msg)[0];
		return res.status(400).send(firstError);
	}
	next();
};

exports.signup = () => {};

exports.signin = () => {};

exports.signout = () => {};

exports.checkAuth = () => {};
