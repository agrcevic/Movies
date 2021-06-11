module.exports = (req, res, next) => {
    //validaciones para saber si es administrador o usuario comun. esto sirve para saber si puede o no editar un producto, o crear producto 
    if (req.session.user && req.session.auth) {
        next();
    }else{
        return res.redirect('/home');//redireccionamiento por si no cumple ser administrador
    } 
};