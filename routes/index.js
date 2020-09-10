'use strict';

const Answers = require('../models/answers');
const { Router } = require('express');
const router = new Router();
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');

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
  try {
    await Answers.create({ email, name, phone, answers, reco: reco.name });
    await transporter.sendMail({
      from: `Asana <${process.env.MAIL}>`,
      to: email,
      subject: 'Resultados del Asana test ✨',
      template: 'main',
      context: {
        name,
        answers,
        reco
      }
    });
    res.json({ success: true });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
