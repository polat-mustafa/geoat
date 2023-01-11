const validate = require('express-validation');
const dal = require('../dal/user_dal');
const services = require('../services/baseService');
const utils = require('../utils/helper');
const Joi = require('joi');

const userValidate = {
    create: {
        body: {

}