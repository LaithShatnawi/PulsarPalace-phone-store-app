"use strict";

const orderContentsModel = (sequelize, DataTypes) => {
    const OrderContents = sequelize.define("order_contents", {
        orderId: {
            type: DataTypes.INTEGER,
            references: {
                model: "orders",
                key: 'id'
            }
        },
        phoneId: {
            type: DataTypes.INTEGER,
            references: {
                model: "phones",
                key: 'id'
            }
        },
        quantity: { type: DataTypes.INTEGER, defaultValue: 1 },
        price: { type: DataTypes.STRING },
    }, { timestamps: true });

    return OrderContents;
};

module.exports = orderContentsModel;
