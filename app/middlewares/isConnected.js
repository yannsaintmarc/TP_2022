const isConnected = (req, res, next) => {

    // Si l'utilisateur est connecté: 
if (req.session.user) {
    next();
    // l'utilisateur n'est pas connecté :
} else {
res.redirect('/login');
}
    
};