// const bcrypt = require('bcrypt')
// const User = require('../models/User')
// const jwt = require('jsonwebtoken')

// const JWT_SECRET = 'My secret';


// async function register(username, password,email)
// {
// const existingEmail = await User.findOne({email}).collation({locale: 'en', strength: 2})

// if(existingEmail){
//   throw new Error('Email is already in use')
// }

// const hashedPassword = await bcrypt.hash(password,10);
// password = hashedPassword;
// const user = await User.create({
//     email,
//     username,
//     password,

// })

// const token = createSession(user)

// return token;
// }

// async function login(email, password)
// {
//   const existing = await User.findOne({email}).collation({locale: 'en', strength: 2})
  
//   if(existing)
//   {
//     if(!bcrypt.compare(password, existing.password))
//     {
//       throw new Error('Username or password is wrong')
//     }
//     const token = createSession({'_id' : existing._id,'email' : existing.email })

//     return token
//   }

//   throw new Error('Username or password is wrong')
// }
 

// function createSession({_id, email})
// {
//     const payload = {
//         _id,
//         email
//     }
    
//     const token = jwt.sign(payload, JWT_SECRET)

//     return token
// }

// function verifyToken(token)
// {
//   return jwt.verify(token, JWT_SECRET)
// }

// module.exports = {
// register,
// login,
// verifyToken
// }