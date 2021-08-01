const {Router} = require('express');
const FormAnimalCare = require('../models/FormAnimalCare');
const auth = require('../middleware/auth.middleware');
const router = Router();


router.post('/create/care', auth, async (req, res) => {
    try {

        const {nameGuardian, lastName, placeOfResidence, phoneNumber, descriptionOwner} = req.body;

        const existing = await FormAnimalCare.findOne({phoneNumber});

        if(existing) {
            return res.json({formAnimalCare: existing});
        }

        const formAnimalCare = new FormAnimalCare({
            nameGuardian, lastName, placeOfResidence, phoneNumber, descriptionOwner, owner: req.user.userId
        })

        await formVolunteer.save();

        res.status(201).json({ formAnimalCare })

    } catch (e) {
        res.status(500).json({message: 'Щось пішло не так, спробуйте знову'})
    }
});

router.get('/', auth, async (req, res) => {
    try {
        const formsAnimalCare = await FormAnimalCare.find({owner: req.user.userId }) 
        res.json(formsAnimalCare)
    } catch (e) {
        res.status(500).json({message: 'Щось пішло не так, спробуйте знову'})
    }
});

router.get('/:id', auth, async (req, res) => {
    try {
        const formAnimalCare = await FormAnimalCare.findById(req.params.id); 
        res.json(formAnimalCare)
    } catch (e) {
        res.status(500).json({message: 'Щось пішло не так, спробуйте знову'})
    }
});

router.route('/edit-animal-care-form/:id').get((req, res) => {
    FormAnimalCare.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  });



  
router.route('/update-animal-care-form/:id').put((req, res, next) => {
    FormAnimalCare.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Заявку успішно оновлено !')
    }
  })
})

router.route('/delete-animal-care-form/:id').delete((req, res, next) => {
    FormAnimalCare.findByIdAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data
        })
      }
    })
  });


module.exports = router