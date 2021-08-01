const {Router} = require('express');
const Animals = require('../models/Animals');
const router = Router();


router.route('/').get((req, res) => {
    Animals.find()
        .then(animals => res.json(animals))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req, res) => {
    Animals.findById(req.params.id)
        .then(animals => res.json(animals))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Animals.findByIdAndDelete(req.params.id)
        .then(animals => res.json('Animals deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Animals.findById(req.params.id)
        .then(animals => {
            animals.type = req.body.type;
            animals.name = req.body.name;
            animals.age = req.body.age;
            animals.breed = req.body.breed;
            animals.size = req.body.size;
            animals.gender = req.body.gender;
            animals.photo = req.body.photo;
            animals.description = req.body.description;

            animals.save()
                .then(() => res.json('Animals updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    
    const type = req.body.type;
    const name = req.body.name;
    const size = req.body.size;
    const age = req.body.age;
    const breed = req.body.breed;
    const description = req.body.description;
    const gender = req.body.gender;
    const photo = req.body.photo;

    const newAnimal = new Animals({
        type,
        name,
        age,
        breed,
        gender,
        size, 
        photo,
        description
    });

    newAnimal.save()
        .then(() => res.json('Animal added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;