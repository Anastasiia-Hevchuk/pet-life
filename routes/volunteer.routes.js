const {Router} = require('express');
const FormVolunteer = require('../models/FormVolunteer');
const auth = require('../middleware/auth.middleware');
const router = Router();


router.post('/create', auth, async (req, res) => {
    try {

        const {nameVolunteer, lastName, placeOfResidence, phoneNumber, descriptionOwner} = req.body;

        const existing = await FormVolunteer.findOne({phoneNumber});

        if(existing) {
            return res.json({formVolunteer: existing});
        }

        const formVolunteer = new FormVolunteer({
            nameVolunteer, lastName, placeOfResidence, phoneNumber, descriptionOwner, owner: req.user.userId
        })

        await formVolunteer.save();

        res.status(201).json({ formVolunteer })

    } catch (e) {
        res.status(500).json({message: 'Щось пішло не так, спробуйте знову'})
    }
});

router.get('/', auth, async (req, res) => {
    try {
        const formVolunteers = await FormVolunteer.find({owner: req.user.userId }) 
        res.json(formVolunteers)
    } catch (e) {
        res.status(500).json({message: 'Щось пішло не так, спробуйте знову'})
    }
});

router.get('/:id', auth, async (req, res) => {
    try {
        const formVolunteer = await FormVolunteer.findById(req.params.id); 
        res.json(formVolunteer)
    } catch (e) {
        res.status(500).json({message: 'Щось пішло не так, спробуйте знову'})
    }
});

module.exports = router