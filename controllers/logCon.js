import { checkLogin } from "../middleware/login.js";

//@desc get login page
//@route GET /login
export const getLogin = (req, res) => {
    if (req.session.user) {
        return res.redirect('/');
    }
    res.render('login', { err: null });
};

//@desc handle logindata
//@route POST /login
export const handleLogin = (req, res) => {
    checkLogin(req.body).then(() => {
        req.session.user = req.body.email;
        res.redirect('/');
    }).catch(err => {
        console.log(err);
        res.render('login', { err });
    });
};

//@desc Logout handle
//@route GET /logout
export const handleLogout = (req, res) => {
    req.session.destroy();
    res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, private");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "-1");
    res.redirect('/login');
};


