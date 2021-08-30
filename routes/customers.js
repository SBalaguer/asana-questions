'use strict';

const { Router } = require('express');
const router = new Router();
const axios = require('axios');

// Ruta get para un usuario con el mail
router.get('/getCustomer', async (req, res, next) => {
    const email = req.query.email;
    const phone = req.query.phone;
    console.log(phone);
    const name = req.query.name;
    const reco = req.query.reco;
    const answers = JSON.parse(req.query.answers);
    const tags = answers.reduce((acc, val, index) => acc += `${val.tag},`, "") + reco;
    let id;
    try {
        const user = await axios.get(`https://${process.env.API_CUSTOMER_KEY}:${process.env.API_CUSTOMER_SECRET}@asana-cup.myshopify.com/admin/api/2021-04/customers/search.json?query=email:${email}&fields=email,id`);
        if (user.data.customers.length) {
            id = user.data.customers[0].id;
            const response = await axios.put(`https://${process.env.API_CUSTOMER_KEY}:${process.env.API_CUSTOMER_SECRET}@asana-cup.myshopify.com/admin/api/2021-04/customers/${id}.json`, {
                "customer": {
                    "id": id,
                    "tags": tags,
                    "accepts_marketing": true,
                    "marketing_opt_in_level": "single_opt_in",
                    ...(!phone && { "phone": phone })
                }
            });
            res.json({ success: true, type: "update", user: user.data.customers });
        } else {
            const response = await axios.post(`https://${process.env.API_CUSTOMER_KEY}:${process.env.API_CUSTOMER_SECRET}@asana-cup.myshopify.com/admin/api/2021-04/customers.json`, {
                "customer": {
                    "first_name": name,
                    "email": email,
                    "answers": answers,
                    "tags": tags,
                    "accepts_marketing": true,
                    "marketing_opt_in_level": "single_opt_in",
                    ...(!phone && { "phone": phone })
                }
            });
            res.json({ success: true, type: "update", user: user.data.customers });
        }
    } catch (error) {
        res.json({ success: false, error: { message: error.message } }).status(500);
    }
});

module.exports = router;