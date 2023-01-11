const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const fs = require('fs');
const dns = require('dns');
const os = require('os');

const createToken = (id) => {
    const token = jwt.sign({ id, name, email }, process.env.JWT_SECRET, {
        expiresIn: '1d',
        issuer: 'localhost',
        audience: 'localhost'
    });
    return token;
}

const verifyToken = (token) => {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
}

const hashPassword = (password) => {
    const hashedPassword = bcrypt.hash(password, 10);
    return hashedPassword;
}

