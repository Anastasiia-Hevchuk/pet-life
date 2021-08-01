const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = (req, res, next) => {
    if(req.method === 'OPTIONS'){//перевірка доступності сервера
        return next()
    }

    try{

        const token = req.headers.authorization.split(' ')[1] // "Bearer TOKEN"

        if (!token){
            return res.status(401).json({ message: 'Немає авторизації' })
        }

        const decoded = jwt.verify(token, config.get('jwtSecret'));//розкодування токену
        req.user = decoded;
        next();

    } catch (e) {
        res.status(401).json({ message: 'Немає авторизації' })
    }
}