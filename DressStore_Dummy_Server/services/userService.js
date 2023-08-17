const bcrypt = require('bcrypt')
const User = require('../models/User')
const jwt = require('jsonwebtoken')

const JWT_SECRET = 'My secret';


async function register(email, password) {

    const existingEmail = await User.findOne({ email }).collation({ locale: 'en', strength: 2 })

    if (existingEmail) {
        return { status: 500, message: 'Email is already in use' }
    }

    const hashedPassword = await bcrypt.hash(password, 5);
    password = hashedPassword;

    const user = await User.create({
        email,
        password,

    })

    const token = createSession(user)

    return { status: 200, token: token };
}


async function getCartCount(id) {
    let existing = await User.findById(id);
    return existing.cartList.length;
}

async function getWishesCount(id) {
    let existing = await User.findById(id);
    return existing.wishList.length;
}


async function getCustomerData(id) {
    let existing = await User.findById(id);
    let user = {
        name: existing.name,
        email: existing.email,
        phone: existing.phone,
        address: existing.address,
        familyName: existing.familyName,
      } 

    return user;
}

async function getCartData(id) {
    let existing = await User.findById(id);
    return existing.cartList;
}


async function getWishes(id) {
    let existing = await User.findById(id);
    return existing.wishList;
}
async function addToCartList(id, product) {
    let existing = await User.findById(id);
    existing.cartList.push(product);
    await existing.save();
}


async function changeWishList(id, products) {
    let existing = await User.findById(id);
    existing.wishList = JSON.parse(JSON.stringify(products));
    await existing.save();
}

async function changeCartList(id, products) {

    let existing = await User.findById(id);
    existing.cartList = JSON.parse(JSON.stringify(products));
    await existing.save();
}

async function login(email, password) {
    const existing = await User.findOne({ email }).collation({ locale: 'en', strength: 2 })

    if (existing) {
        if (!bcrypt.compare(password, existing.password)) {
            return { status: 500, message: 'Username or password is wrong' };
        }
        const token = createSession({ '_id': existing._id, 'email': existing.email })

        return { status: 200, token: token };
    }

    return { status: 500, message: 'Username or password is wrong' };
}


function createSession({ _id, email }) {
    const payload = {
        _id,
        email
    }

    const token = jwt.sign(payload, JWT_SECRET)

    return token
}

function verifyToken(token) {
    return jwt.verify(token, JWT_SECRET)
}

module.exports = {
    register,
    login,
    verifyToken,
    getWishesCount,
    changeWishList,
    addToCartList,
    getCartCount,
    getCartData,
    changeCartList,
    getCustomerData,
    getWishes
}