const Pet = require('../models/pet.model');

module.exports = {
    getAll (req, res){
        Pet.find({}).sort('type').exec()
        .then(pets => res.json(pets))
        .catch(err => res.json(err))
    },

    create(req, res) {
        Pet.create(req.body)
        .then(pet => res.json(pet))
        .catch(err => res.status(400).json(err))
    },

    getOne(req, res) {
        Pet.findOne({_id:req.params.id})
        .then(pet => res.json(pet))
        .catch(err => res.json(err))
    },

    update(req, res) {
        Pet.findOneAndUpdate({_id:req.params.id}, req.body, {
            runValidators: true,
            new: true,
        })
        .then(pet => res.json(pet))
        .catch(err => res.status(400).json(err))
    },

    delete(req, res) {
        Pet.findOneAndDelete({_id:req.params.id})
        .then(pet => res.json(pet))
        .catch(err => res.json(err))
    }
}