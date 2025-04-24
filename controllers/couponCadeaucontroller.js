const CouponCadeau = require('../models/couponCadeau');

// CREATE - Ajouter un coupon cadeau
exports.createCoupon = async (req, res) => {
  try {
    const { code, description, valeur, dateExpiration } = req.body;
    const coupon = new CouponCadeau({
      code,
      description,
      valeur,
      dateExpiration,
      statut: 'actif',
    });
    await coupon.save();
    res.status(201).json({ message: 'Coupon créé avec succès', coupon });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// READ - Récupérer tous les coupons cadeaux
exports.getCoupons = async (req, res) => {
  try {
    const coupons = await CouponCadeau.find();
    res.status(200).json(coupons);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// READ - Récupérer un coupon cadeau par son code
exports.getCouponByCode = async (req, res) => {
  try {
    const coupon = await CouponCadeau.findOne({ code: req.params.code });
    if (!coupon) {
      return res.status(404).json({ message: 'Coupon non trouvé' });
    }
    res.status(200).json(coupon);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE - Modifier un coupon cadeau
exports.updateCoupon = async (req, res) => {
  try {
    const { description, valeur, dateExpiration } = req.body;
    const coupon = await CouponCadeau.findOneAndUpdate(
      { code: req.params.code },
      { description, valeur, dateExpiration },
      { new: true }
    );
    if (!coupon) {
      return res.status(404).json({ message: 'Coupon non trouvé' });
    }
    res.status(200).json({ message: 'Coupon mis à jour', coupon });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE - Supprimer un coupon cadeau
exports.deleteCoupon = async (req, res) => {
  try {
    const coupon = await CouponCadeau.findOneAndDelete({ code: req.params.code });
    if (!coupon) {
      return res.status(404).json({ message: 'Coupon non trouvé' });
    }
    res.status(200).json({ message: 'Coupon supprimé' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
