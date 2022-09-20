const jwt = require('jsonwebtoken');

// set token secret and expiration date
const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
        const payload = { usernmae, email, _id };

        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },

    // function for our authenticated routes
    authMiddleware: function (req, res, next) {
        // allows token to be sent via req.body, req.query, or headers
        let token =
            req.body.token || req.query.token || req.headers.authorization;

        // ["Bearer", "<tokenvalue>"]
        if (req.headers.authorization) {
            token = token.split(' ').pop().trim();
        }

        // If no token exists return the request object as it is
        if (!token) {
            return req;
        }

        // verify token and get user data out of it
        try {
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data;
        } catch {
            console.log('Invalid token');
            return res.status(400).json({ message: 'invalid token!' });
        }

        // returning up to date request object
        return req;
    },
};
