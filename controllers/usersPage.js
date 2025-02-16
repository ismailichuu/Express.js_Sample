import users from "../data/users.js";

//@desc get user page
//@route GET /users
export const getUsers = (req, res) => {
    res.render('table' , {users});
}