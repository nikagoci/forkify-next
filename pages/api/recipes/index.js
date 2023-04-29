import connectToDatabase from "@/database/connectDB";
import Recipes from "../../../database/model/recipesModel";
import APIFeatures from "../../../database/apiFeatures";

export default async function handler(
  req,
  res
) {
  if (req.method === "GET") {
    try {
      await connectToDatabase();

      // const allRecipe = await Recipes.find();
      const features = new APIFeatures(Recipes.find(), req.query)
      .filter()
      .sort()
      .fieldLimit()
      .paginate();

    const allRecipe = await features.query

      res.status(201).json({
        status: "success",
        length: allRecipe.length,
        recipes: allRecipe,
      });
  
    } catch (err) {
      res.status(400).json({
        status: "fail",
        message: err.message,
      });
    }
  } else if(req.method === "POST") {
    try{
        const newRecipe = await Recipes.create(req.body);

        res.status(201).json({
        status: "success",
        recipe: newRecipe,
        }); 

    } catch(err){
        res.status(400).json({
            status: "fail",
            message: err.message,
          }); 
    }
  }
  else {
    res.status(404).json({
      message: "Try different method",
    });
  }
}
