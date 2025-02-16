//@desc get home page
//@route GET '/';
export const getHomepage = (req, res) => {
    const loggedInn = req.session.user ? true : false;
    res.render('cards', { data: req.data, login: loggedInn });
};
