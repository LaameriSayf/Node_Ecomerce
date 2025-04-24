const mongoose = require('mongoose');

const couponCadeauSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  montant: {
    type: Number,
  
  },
  dateExpiration: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model('CouponCadeau', couponCadeauSchema);
