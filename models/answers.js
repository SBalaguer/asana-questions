'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true
    },
    name: {
      type: String,
      required: true,
      trim: true
    },
    phone: {
      type: String,
      lowercase: true,
      trim: true
    },
    answers: {
      type: Object,
      required: true
    },
    reco: {
      type: String,
      required: true
    }
  },
  { timestamps: { createdAt: 'created_at' } }
);

module.exports = mongoose.model('Answers', schema);
