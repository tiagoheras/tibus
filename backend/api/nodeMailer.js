const express = require('express');
const mailerRouter = express.Router();

mailerRouter.post('/', (req, res, next) => {
    const producto = req.body.producto,
        talle = req.body.talle,
        precio = req.body.precio,
        clientName = req.body.clientName,
        clientPhone = req.body.clientPhone,
        clientEmail = req.body.clientEmail;

    if (!producto || !talle || !precio || !clientName || !clientPhone || !clientEmail) {
        return res.sendStatus(400);
    } else {
        const nodemailer = require('nodemailer');

        const transporter = nodemailer.createTransport({
            service: 'hotmail',
            auth: {
                user: 'tiagoheras@hotmail.com',
                pass: 'Gauchito99'
            }
        });

        const mailOptions = {
            from: 'tiagoheras@hotmail.com',
            to: 'tibuscalzados@gmail.com',
            subject: `Nuevo pedido item: ${producto}`,
            text: `Recibiste una consulta por ${producto} talle ${talle} ($${precio}) de ${clientName} tel: ${clientPhone}, email: ${clientEmail}`
        }

        return transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
                res.send(err);
            } else {
                return res.sendStatus(201);
            }
        })
    }
})

module.exports = mailerRouter;