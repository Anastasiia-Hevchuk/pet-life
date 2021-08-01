const {Router} = require('express');
const Advertisement = require('../models/Advertisement');
const auth = require('../middleware/auth.middleware');
const router = Router();


router.post('/create/advertisement', auth, async (req, res) => {
    try {

        const { 
            nameAnimal, 
            genderAnimal, 
            city, 
            ageAnimal, 
            data, 
            photo, 
            nameOwner, 
            lastName, 
            phoneNumber, 
            description
        } = req.body;

        const existing = await Advertisement.findOne({phoneNumber});

        if(existing) {
            return res.json({advertisement: existing});
        }

        const advertisement = new Advertisement({
            nameAnimal, 
            genderAnimal, 
            city, 
            ageAnimal, 
            data, 
            photo, 
            nameOwner, 
            lastName, 
            phoneNumber, 
            description, 
            owner: req.user.userId
        })

        await advertisement.save();

        res.status(201).json({ advertisement })

    } catch (e) {
        res.status(500).json({message: 'Щось пішло не так, спробуйте знову'})
    }
});

router.get('/', auth, async (req, res) => {
    try {
        const advertisements = await Advertisement.find({owner: req.user.userId }) 
        res.json(advertisements)
    } catch (e) {
        res.status(500).json({message: 'Щось пішло не так, спробуйте знову'})
    }
});

router.get('/:id', auth, async (req, res) => {
    try {
        const advertisement = await Advertisement.findById(req.params.id); 
        res.json(advertisement)
    } catch (e) {
        res.status(500).json({message: 'Щось пішло не так, спробуйте знову'})
    }
});



module.exports = router