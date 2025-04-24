const express = require('express');
const router = express.Router();

// Importer les fonctions du contrôleur
const couponController = require('../controllers/couponCadeaucontroller');

// CREATE - Ajouter un coupon cadeau
router.post('/', couponController.createCoupon);

// READ - Récupérer tous les coupons cadeaux
router.get('/', couponController.getCoupons);

// READ - Récupérer un coupon cadeau par son code
router.get('/:code', couponController.getCouponByCode);

// UPDATE - Modifier un coupon cadeau
router.put('/:code', couponController.updateCoupon);

// DELETE - Supprimer un coupon cadeau
router.delete('/:code', couponController.deleteCoupon);
// Route POST pour ajouter un coupon avec date d'expiration

router.post('/coupons', (req, res) => {
    const { code, description, montant, dateExpiration } = req.body;
  
    // Vérification des champs requis
    if (!code || !description || !montant || !dateExpiration) {
      return res.status(400).json({ message: 'Tous les champs sont requis' });
    }
  
    const nouveauCoupon = new CouponCadeau({
      code: code,
      description: description,
      dateExpiration: new Date(dateExpiration),
    });
  
    nouveauCoupon.save()
      .then((coupon) => {
        res.status(201).json({ message: 'Coupon créé avec succès', coupon });
      })
      .catch((err) => {
        res.status(500).json({ message: 'Erreur lors de la création du coupon', error: err.message });
      });
  });

module.exports = router;
