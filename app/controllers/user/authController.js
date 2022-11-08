const User = require('../../database/modals/User')
const bcrypt = require('bcrypt')
module.exports = {
    login: (req, res, next) => {
        res.render('pages/login')
    },

    register: (req, res, next) => {
        res.render('pages/register')
    },

    // post register

    doRegister: async (req, res, next) => {

        User.exists({ email: req.body.email }).then(user => {
            if (user) {
                req.flash('error', 'User Already Exist')
                res.redirect('/register')
            }
            else {

                const { username, email, password } = req.body;
                if (!username || !email || !password) {
                    req.flash('error', 'All fields are required')
                     res.redirect('/register')
                } else {

                    const hashedPassword = bcrypt.hashSync(password, 10)

                    try {
                        const newUser = new User({
                            username: username,
                            email: email,
                            password: hashedPassword
                        })
                        newUser.save()
                        res.redirect('/login')
                    } catch (err) {
                        res.redirect('/register')
                    }
                }
            }
        }).catch(err => console.log(err))



    }

    // login section here


    




}