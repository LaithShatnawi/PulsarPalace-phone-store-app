"use strict";

const ordersModel = (sequelize, DataTypes) =>
    sequelize.define("orders", {
        date: { type: DataTypes.DATE },
        address: { type: DataTypes.STRING },
        total_pay: { type: DataTypes.INTEGER },
        status: { type: DataTypes.STRING },
        user_id: { type: DataTypes.INTEGER },
    }, { timestamps: true }
    );

module.exports = ordersModel;