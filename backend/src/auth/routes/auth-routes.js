'use strict';

const express = require('express');
const authRouter = express.Router();

const { users } = require('../../models/index.js');
const basicAuth = require('../middlewares/basic.js')

const bearerAuth = require("../middlewares/bearer.js");
const acl = require("../middlewares/acl.js");

authRouter.post('/signup', async (req, res, next) => {
    try {
        let userRecord = await users.create(req.body);
        res.status(201).json(userRecord.token);
    } catch (e) {
        next(e.message)
    }
});

authRouter.post('/signin', basicAuth, (req, res, next) => {
    try {
        res.status(200).json(req.user.token);
    } catch (e) {
        console.log(e.message)
    }
});

authRouter.get("/allusers", bearerAuth, acl("read"), async (req, res) => {
    const allusers = await users.findAll();
    res.status(200).json(allusers);
});


// authRouter.get("/oneuser/:id", bearerAuth, acl("readUser"), async (req, res) => {
//     let id = parseInt(req.params.id);
//     const user = await users.findOne({ where: { id: id } });
//     res.status(200).json({ username: user.username, image: user.image });
// });

module.exports = authRouter;
