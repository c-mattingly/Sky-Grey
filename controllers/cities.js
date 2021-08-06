const City = require("../models/city");

module.exports = {
    show,
    create,
}

async function create(req, res){
    console.log(req.params)

    try {
        const city = await City.create({
            zip: req.params, 
            user: req.user
        });
    } catch (err) {
        console.log(err);
        res.json({ err });
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