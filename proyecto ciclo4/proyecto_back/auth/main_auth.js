const jwt = require("jsonwebtoken")

const auth = (req, res, next) => {
    try{
        const token = req.headers.authorization.split(" ")[1]
        const decoded = jwt.verify(token, "_recret_")
        req.usuario = decoded
        next()
    } catch (error){
        res.status(401)
        res.json({code:4, msg:"no tiene autorizacion para ver el contenido"})
    }
}
// crea el token
module.exports = auth