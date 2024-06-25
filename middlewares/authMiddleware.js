const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');
    if (!token) {
        return res.status(401).send({ error: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; 

        if (req.method === 'PUT' || req.method === 'DELETE') {
            if (req.user.id !== req.params.id) {
                return res.status(403).send({ error: 'Access denied. You can only modify your own data.' });
            }
        }

        next();
    } catch (ex) {
        res.status(400).send({ error: 'Invalid token.' });
    }
};

module.exports = authMiddleware;
