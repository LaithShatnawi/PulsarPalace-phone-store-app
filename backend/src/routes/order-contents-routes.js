
const express = require("express");
const orderContentRouter = express.Router();
const { orderContent, orderContentCollection } = require("../models/index");
const bearerAuth = require("../auth/middlewares/bearer");
const acl = require("../auth/middlewares/acl");

orderContentRouter.get("/contents/:id", bearerAuth, acl("readUser"), getContents);
orderContentRouter.get("/productInOrder/:id", bearerAuth, acl("readUser"), getOneProduct);
orderContentRouter.post("/productInOrder", bearerAuth, acl("createUser"), addProductTo);
orderContentRouter.delete("/productInOrder/:id", bearerAuth, acl("deleteUser"), removeProduct);


async function getContents(req, res) {
    let id = parseInt(req.params.id)
    let contentsRecord = await orderContent.findAll({ where: { orderId: id } })
    res.status(200).json(contentsRecord);
}

async function getOneProduct(req, res) {
    let id = parseInt(req.params.id)
    let productId = parseInt(req.body.id)
    let contentsRecord = await orderContent.findOne({
        where: {
            orderId: id,
            phoneId: productId
        }
    })
    res.status(200).json(contentsRecord);
}

async function addProductTo(req, res) {
    let phonesArray = req.body;
    let order = phonesArray.map(async (phone) => {
        let productRecord = await orderContentCollection.create(phone);
        return productRecord;
    });
    res.status(201).json(order);
}

async function removeProduct(req, res) {
    let id = parseInt(req.params.id);
    let array = await orderContentCollection.get()
    let order = array.map(async () => {
        let productRecord = await orderContentCollection.deleteAll(id);
        return productRecord;
    });
    res.status(201).json(order);
}

module.exports = orderContentRouter;
