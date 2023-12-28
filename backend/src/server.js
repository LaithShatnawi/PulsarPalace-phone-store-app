"use strict"

require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();
const { data } = require('./data.js')
const { phones } = require('./models/index.js')
const authRouter = require('./auth/routes/auth-routes')
const phonesRouter = require('./routes/phones-routes')
const ordersRouter = require('./routes/orders-routes')
const orderContentRouter = require('./routes/order-contents-routes')


app.use(cors());
app.use(express.json());

app.use(authRouter)
app.use(phonesRouter)
app.use(ordersRouter)
app.use(orderContentRouter)


app.get("/", (req, res) => {
    res.status(200).send("welcome to  Pulsar Palace API")
})

// const options = (endPoint) =>
// ({
//     method: 'GET',
//     url: `https://mobile-phone-specs-database.p.rapidapi.com/gsm${endPoint}`,
//     headers: {
//         'X-RapidAPI-Key': 'b4fb3f549fmsh83e025b54edf79cp1e9097jsn917978140a17',
//         'X-RapidAPI-Host': 'mobile-phone-specs-database.p.rapidapi.com'
//     }
// })

app.post("/test", async (req, res) => {
    await Promise.all(data.map(async (el) => {
        try {
            const result = await phones.create({
                brandName: el.brandName,
                modelName: el.modelName,
                images: el.images,
                price: el.price,
                networkDetails: el.networkDetails,
                bodyDetails: el.bodyDetails,
                displayDetails: el.displayDetails,
                memoryDetails: el.memoryDetails,
                mainCameraDetails: el.mainCameraDetails,
                platformDetails: el.platformDetails
            });
            // `result` contains the newly created record
            console.log(result);
        } catch (error) {
            // Handle any errors that occur during the create operation
            console.error(error);
        }
    }));
    res.status(200).send("Welcome to the PulsarPalace API!");
});


// app.get("/all-brands", async (req, res) => {
//     try {
//         const newOptions = options("/all-brands")
//         const response = await axios.request(newOptions);
//         console.log(response.data);
//         res.status(200).send(response.data)
//     } catch (error) {
//         console.error(error);
//     }
// })

// app.get("/models", async (req, res) => {
//     try {
//         const brandName = req.body.brandName
//         const newOptions = options(`/get-models-by-brandname/${brandName}`)
//         const response = await axios.request(newOptions);
//         console.log(response.data);
//         res.status(200).send(response.data)
//     } catch (error) {
//         console.error(error);
//     }
// })

// app.get("/specifications", async (req, res) => {
//     try {
//         const brandName = req.body.brandName
//         const modelName = req.body.modelName
//         modelName.replace(" ", "%20")
//         const newOptions = options(`/get-specifications-by-brandname-modelname/${brandName}/${modelName}`)
//         const response = await axios.request(newOptions);
//         console.log(response.data);
//         res.status(200).send(response.data)
//     } catch (error) {
//         console.error(error);
//     }
// })

// app.get("/images", async (req, res) => {
//     try {
//         const customId = req.body.customId
//         const newOptions = options(`/get-phone-images-ids-by-phone-custom-id/${customId}`)
//         const response = await axios.request(newOptions);
//         console.log(response.data);
//         res.status(200).send(response.data)
//     } catch (error) {
//         console.error(error);
//     }
// })

// app.get("/image", async (req, res) => {
//     try {
//         const imageId = req.body.imageId
//         const newOptions = options(`/get-image-by-id/${imageId}`)
//         const response = await axios.request(newOptions);
//         console.log(response.data);
//         res.status(200).send(response.data)
//     } catch (error) {
//         console.error(error);
//     }
// })

module.exports = {
    start: (port) => {
        app.listen(port, () => {
            console.log(`Server Up on ${port}`);
        });
    },
};