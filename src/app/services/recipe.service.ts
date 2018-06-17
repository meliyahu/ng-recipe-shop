import { Injectable } from '@angular/core';
import { Recipe } from './../recipes/recipe.model';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipes: Recipe [] = [
    // tslint:disable-next-line:max-line-length
    new Recipe(4, 'Roasted Ribs', 'Roasted ribs with sweet chilly and a salad side dish', 'https://www.maxpixel.net/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg'),
    new Recipe(8, 'Kabobs', 'Shish kabobs over an open flame', 'https://www.nps.gov/subjects/camping/images/recipe_1.jpg')
  ];

  constructor() { }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    for ( const recipe of this.recipes) {
      if (recipe.id = id) {
        return recipe;
      }
    }
  }
}
