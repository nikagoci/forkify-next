import connectToDatabase from "@/database/connectDB";
import Recipes from "../../../database/model/recipesModel";

export default async function handler(
  req,
  res
) {
  if (req.method === "GET") {
    try {
      await connectToDatabase();

      const recipe = await Recipes.findById(req.query.recipeId);


      if (!recipe) {
        res.status(400).json({
          message: "Product not found",
        });
      }

      res.status(200).json({
        status: "success",
        recipe,
      });
    } catch (err) {
      res.status(400).json({
        status: "fail",
        message: err.message,
      });
    }
  }  else {
    res.status(404).json({
      status: "fail",
      message: "The request response only GET/DELETE Method",
    });
  }
}
