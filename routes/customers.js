'use strict';

const { Router } = require('express');
const router = new Router();
const axios = require('axios');

// Ruta get para un usuario con el mail
router.get('/getCustomer', async (req, res, next) => {
    const email = req.query.email;
    const phone = req.query.phone;
    let id;
    try {
        const user = await axios.get(`https://${process.env.API_CUSTOMER_KEY}:${process.env.API_CUSTOMER_SECRET}@asana-cup.myshopify.com/admin/api/2021-04/customers/search.json?query=email:${email}&fields=email,id`);
        if (user.data.customers.length) {
            console.log("if fue true");
            id = user.data.customers[0].id;
            console.log(id);
            const response = await axios.put(`https://${process.env.API_CUSTOMER_KEY}:${process.env.API_CUSTOMER_SECRET}@asana-cup.myshopify.com/admin/api/2021-04/customers/${id}.json`,{
                "customer": {
                    "id": id,
                    "tags": "TestDone,CervixAlto"
                }
            });
            res.json({success:true, type: "update" ,user:user.data.customers });
        } else {
            const response = await axios.post(`https://${process.env.API_CUSTOMER_KEY}:${process.env.API_CUSTOMER_SECRET}@asana-cup.myshopify.com/admin/api/2021-04/customers.json`,{
                "customer": {
                    "first_name": "Copitaaahhh",
                    "email": email,
                    "tags":"TOM"
                  }                 
            });
            res.json({success:true, type: "update" ,user:user.data.customers });
        }
    } catch (error) {
        res.json({ success: false, error: { message: error.message } }).status(500);
    }
  });

module.exports = router;