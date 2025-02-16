
const emailOg = process.env.EMAIL;
const passwordOg = process.env.PASSWORD;

export function checkLogin(data) {
    return new Promise((resolve, reject) => {
        const {email, password} = data ;
        if(email === emailOg && password === passwordOg){
            resolve({login : true});
        }else{
            reject({msg : 'Invalid Credentials'});
        }
    })
   
}

export function logger(req, res, next) {
    if(!req.session.user){
       return res.redirect('/login');
    }
    next();
}

