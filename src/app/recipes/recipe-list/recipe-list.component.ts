import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 recipes: Recipe[] = [
   // tslint:disable-next-line:max-line-length
   new Recipe('Roasted Ribs', 'Roasted ribs with sweet chilly and a salad side dish', 'https://www.maxpixel.net/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg'),
   new Recipe('Kabobs', 'Shish kabobs over an open flame', 'https://www.nps.gov/subjects/camping/images/recipe_1.jpg')
 ];

   constructor() { }

  ngOnInit() {
  }

}
