
const express = require("express");
const phonesRouter = express.Router();
const { phones } = require("../models/index");
const bearerAuth = require("../auth/middlewares/bearer");
const acl = require("../auth/middlewares/acl");

phonesRouter.get("/products", getProducts);
phonesRouter.get("/product/:id", getOneProduct);
phonesRouter.post("/product", bearerAuth, acl("create"), addProduct);
phonesRouter.put("/product/:id", bearerAuth, acl("update"), updateProduct);
phonesRouter.delete("/product/:id", bearerAuth, acl("delete"), deleteProduct);

async function getProducts(req, res) {
    let productRecord = await phones.get();
    res.status(200).json(productRecord);
}

async function getOneProduct(req, res) {
    let id = parseInt(req.params.id);
    let productRecord = await phones.get(id);
    res.status(200).json(productRecord);
}

async function addProduct(req, res) {
    let productData = req.body;
    let productRecord = await phones.create(productData);
    res.status(201).json(productRecord);
}

async function updateProduct(req, res) {
    let id = parseInt(req.params.id);
    let productData = req.body;
    let productRecord = await phones.update(id, productData);
    res.status(201).json(productRecord);
}

async function deleteProduct(req, res) {
    let id = parseInt(req.params.id);
    let productRecord = await phones.delete(id);
    res.status(204).json(productRecord);
}

module.exports = phonesRouter;
