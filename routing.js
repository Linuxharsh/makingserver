const express =require('express');
const recipe = require('../modules/recipe.js');

const routing = express.Router();

routing.post('/add',async(req,res) => {
  try{
    const newRecipe = new recipe(req.body);
    await newRecipe.save();
    res.status(201).json(newRecipe);
  }
  catch(error){
    res.status(400).json({error:error.message});
  }
  
})


routing.get('/add',async(req,res) => {
  try{
    const recipes = await recipe.find();
    res.json(recipes);
  }
  catch(error){
    res.status(500).json({error:error.message});
  }
});
module.exports = routing;