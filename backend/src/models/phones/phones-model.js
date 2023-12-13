"use strict";

const phonesModel = (sequelize, DataTypes) =>
    sequelize.define("phones", {
        brandName: { type: DataTypes.STRING },
        modelName: { type: DataTypes.STRING },
        images: { type: DataTypes.TEXT },
        price: { type: DataTypes.STRING },
        networkDetails: { type: DataTypes.JSON },
        bodyDetails: { type: DataTypes.JSON },
        displayDetails: { type: DataTypes.JSON },
        memoryDetails: { type: DataTypes.JSON },
        mainCameraDetails: { type: DataTypes.JSON },
        platformDetails: { type: DataTypes.JSON },
    }, { timestamps: true }
    );

module.exports = phonesModel;