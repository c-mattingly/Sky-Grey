const City = require("../models/city");

module.exports = {
    show,
}

async function show(req, res) {
    try {
        const city = await City.findOne({name: req.params.name})

        if(!city) res.status(404).json({message: 'bad parameters'})

        res.status(200).json({city: city})
    } catch(err){
      console.log(err)
      res.json({err})
    }
}