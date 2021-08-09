const City = require("../models/city");

module.exports = {
    show,
    create,
    deleteCity,
}

async function create(req, res){
    console.log(req.params)

    try {
        const city = await City.create({
            zip: req.params.zip, 
            user: req.user
        });
        res.json({message: 'city added to user'})
    } catch (err) {
        console.log(err);
        res.json({ err });
    }
}

async function deleteCity(req, res) {
    try {
        await City.findByIdAndDelete(req.params.zip)
        res.json({data: 'city removed'})
    } catch(err) {
        console.log(err, 'error removing city')
    }
}

async function show(req, res) {
    try {
        const city = await City.findOne({zip: req.params.zip})

        if(!city) res.status(404).json({message: 'bad parameters'})

        res.status(200).json({city: city})
    } catch(err){
      console.log(err)
      res.json({err})
    }
}