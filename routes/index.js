'use strict';

const Answers = require('../models/answers');
const { Router } = require('express');
const router = new Router();
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const telFunct = require('../helpers/phone-check');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.MAIL,
    pass: process.env.PASSWORD
  }
});

transporter.use(
  'compile',
  hbs({
    viewEngine: 'express-handlebars',
    viewPath: ''
  })
);

router.get('/answers', (req, res, next) => {
  res.json({ type: 'success', data: { title: 'Hello World' } });
});

router.post('/answers', async (req, res, next) => {
  const { answers, reco } = req.body;
  const { email, name, phone } = req.body.userInfo;
  //Phone comes as string.
  let usePhone;
  if (phone.toString().charAt(0)==="1" && phone.toString().charAt(1)==="5") {
    usePhone = phone.toString().split("");
    usePhone[1]="1";
    usePhone = usePhone.join("");
  } else {
    usePhone = phone;
  }

  const phoneData = telFunct.telefono(usePhone);
  const workingPhone = phoneData ? phoneData.area_code + phoneData.number : phone;
  try {
    const a = await Answers.create({ email, name, phone: workingPhone, answers, reco: reco.name }); 
    console.log(a)
    const sendName = name.trim().split(' ')[0];
    const sendNameCapital = sendName.charAt(0).toUpperCase() + sendName.slice(1);
    if (phoneData) {
      await transporter.sendMail({
        from: `Asana Copa Menstrual <${process.env.MAIL}>`,
        to: email,
        subject: 'Tu modelo ideal y un regalito 🎁 para vos',
        template: 'main',
        context: {
          name: sendNameCapital,
          answers,
          reco,
          phone: phoneData ? phoneData.area_code + phoneData.number : ""
        }
      });
    } else {
      await transporter.sendMail({
        from: `Asana Copa Menstrual <${process.env.MAIL}>`,
        to: email,
        subject: 'Te dejamos un regalito 🎁 para vos',
        template: 'main',
        context: {
          name: sendNameCapital,
          answers,
          reco,
          phone: phoneData ? phoneData.area_code + phoneData.number : ""
        }
      });
    }
    res.json({ success: true });
  } catch (error) {
    res.json({ success: false, error: { message: error.message } }).status(500);
  }
});

module.exports = router;
