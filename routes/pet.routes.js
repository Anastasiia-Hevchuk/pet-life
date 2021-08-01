const {Router} = require('express');
const AdoptApplication = require('../models/AdoptApplication');
const auth = require('../middleware/auth.middleware');
const router = Router();

// /api/pet/generate
router.post('/generate', auth, async (req, res) => {
    try {
        
        const {nameOwner, phoneNumber, descriptionOwner} = req.body;

        const existing = await AdoptApplication.findOne({descriptionOwner, phoneNumber});

        if(existing) {
            return res.json({adoptApplication: existing});
        }

        const adoptApplication = new AdoptApplication({
            nameOwner, descriptionOwner, phoneNumber, owner: req.user.userId
        })

        await adoptApplication.save();

        res.status(201).json({ adoptApplication })

    } catch (e) {
        res.status(500).json({message: 'Щось пішло не так, спробуйте знову'})
    }
});

// /api/pet/generate/
router.get('/', auth, async (req, res) => {
    try {
        const adoptApplications = await AdoptApplication.find({owner: req.user.userId }) 
        res.json(adoptApplications)
    } catch (e) {
        res.status(500).json({message: 'Щось пішло не так, спробуйте знову'})
    }
});

// /api/pet/generate/:id
router.get('/:id', auth, async (req, res) => {
    try {
        const adoptApplication = await AdoptApplication.findById(req.params.id); 
        res.json(adoptApplication)
    } catch (e) {
        res.status(500).json({message: 'Щось пішло не так, спробуйте знову'})
    }
});

router.route('/edit-adopt-application/:id').get((req, res) => {
    AdoptApplication.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  });



  
router.route('/update-adopt-application/:id').put((req, res, next) => {
  AdoptApplication.findByIdAndUpdate(req.params.id, {
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

router.route('/delete-adopt-application/:id').delete((req, res, next) => {
    AdoptApplication.findByIdAndRemove(req.params.id, (error, data) => {
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