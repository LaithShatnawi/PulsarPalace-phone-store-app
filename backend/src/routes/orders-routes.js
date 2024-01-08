
const express = require("express");
const ordersRouter = express.Router();
const { orders } = require("../models/index");
const { usersCollection } = require("../models/index");
const bearerAuth = require("../auth/middlewares/bearer");
const acl = require("../auth/middlewares/acl");

ordersRouter.get("/allorders", bearerAuth, acl("read"), getAllOrders);
ordersRouter.get("/orders/:id", bearerAuth, acl("readUser"), getOrders);
ordersRouter.get("/order/:id", bearerAuth, acl("readUser"), getOneOrder);
ordersRouter.post("/order", bearerAuth, acl("createUser"), addOrder);
ordersRouter.put("/order/:id", bearerAuth, acl("updateUser"), updateOrder);
ordersRouter.delete("/order/:id", bearerAuth, acl("deleteUser"), deleteOrder);

async function getAllOrders(req, res) {
    let orderRecord = await orders.get();
    res.status(200).json(orderRecord);
}

async function getOrders(req, res) {
    let id = parseInt(req.params.id);
    const ordersData = await usersCollection.readHasMany(id, orders.model);
    res.status(200).json(ordersData.orders);
}

async function getOneOrder(req, res) {
    let id = parseInt(req.params.id);
    let orderRecord = await orders.get(id);
    res.status(200).json(orderRecord);
}

async function addOrder(req, res) {
    let orderData = req.body;
    let orderRecord = await orders.create(orderData);
    res.status(201).json(orderRecord);
}

async function updateOrder(req, res) {
    let id = parseInt(req.params.id);
    let orderData = req.body;
    let orderRecord = await orders.update(id, orderData);
    res.status(201).json(orderRecord);
}

async function deleteOrder(req, res) {
    let id = parseInt(req.params.id);
    let orderRecord = await orders.delete(id);
    res.status(204).json(orderRecord);
}

module.exports = ordersRouter;
