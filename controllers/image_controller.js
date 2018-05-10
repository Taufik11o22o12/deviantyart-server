const Image = require('../models/picture');

module.exports = {

  addImage(req, res){
    const newImage = new Image({
      user_id: '4',
      description: 'chaioa',
      category : 'chaioa',
      pic_url: req.file.cloudStoragePublicUrl
    })

    console.log(req.file);

    newImage.save()

    .then(success => {
      res.status(201).json('success save image')
    })
    .catch(err => {
      res.status(400).json('failed save')
    })

  },

  getImage(req, res){

    Image.find({})

    .then(data => {
      res.status(200).json({
        message: 'success get data',
        data
      })
    })
    .catch(err => {
      res.status(400).json('failed get')
    })

  }

};
