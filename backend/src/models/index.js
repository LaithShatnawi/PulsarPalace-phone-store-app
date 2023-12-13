"use strict"

const { Sequelize, DataTypes } = require('sequelize');
const phonesModel = require('./phones/phones-model');
const ordersModel = require('./orders/orders-model');
const orderContentModel = require('./order_contents/order_contents-model');
const usersModel = require('../auth/models/users-model');
const Collection = require('./collection');


const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory;';

const sequelize = new Sequelize(DATABASE_URL, { logging: false });

const users = usersModel(sequelize, DataTypes);
const phones = phonesModel(sequelize, DataTypes);
const orders = ordersModel(sequelize, DataTypes);
const orderContent = orderContentModel(sequelize, DataTypes);


const usersCollection = new Collection(users);
const phonesCollection = new Collection(phones);
const ordersCollection = new Collection(orders);
const orderContentCollection = new Collection(orderContent);

//----------------------Relations-----------------------------

phones.belongsToMany(orders, { through: orderContent });
orders.belongsToMany(phones, { through: orderContent });

users.hasMany(orders, {
    foreignKey: 'user_id',
    sourceKey: 'id',
});
orders.belongsTo(users, {
    foreignKey: 'user_id',
    targetKey: 'id',
});

module.exports = {
    db: sequelize,
    users: users,
    usersCollection: usersCollection,
    phones: phonesCollection,
    orders: ordersCollection,
    orderContent: orderContent,
    orderContentCollection: orderContentCollection
}