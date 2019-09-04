const express = require('express');
const router = express.Router();

const Song = require('../models/song');

 router.get('/', async (req, res, next) => {
  console.log(req.body, '<--- all songs')
     try  {
      const allSongs = await Song.find();

      res.json({
        status: {
            code: 200,
            message: "Success"
          },
        data: allSongs
      });
    } catch (err){
      res.send(err)
    }
});

router.post('/', async (req, res) => {
  try {
    console.log(req.body, '<--- this is req.body');
    const createdSong= await Song.create(req.body);
    console.log('response happening?')
    res.json({
      status: {
            code: 201,
            message: "Resource successfully created"
          },
      data: createdSong
    });
  } catch(err){
    console.log(err);
    res.send(err);
  }
});

router.get('/:id', async (req, res, next) => {
     try  {
        const foundSong = await Song.findById(req.params.id);
        res.json({
          status: {
            code: 200,
            message: "Success"
          },
          data: foundSong
        });

      } catch (err){
        res.send(err);
      }



});

// update
router.put('/:id', async (req, res) => {
  try {
    const updatedSong= await Song.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json({
      status: {
            code: 201,
            message: "Resource successfully updated"
          },
      data: updatedSong
    });
  } catch(err){
    res.send(err)
  }
});

// Delete route
router.delete('/:id', async (req, res) => {
  try {
     const deletedSong = await Song.findByIdAndRemove(req.params.id);
      res.json({
        status:  {
            code: 200,
            message: "Resource successfully deleted"
          },
        data: deletedSong
      });
  } catch(err){
    res.send(err);
  }
});

module.exports = router;