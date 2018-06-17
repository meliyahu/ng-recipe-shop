import { Recipe } from './../recipe.model';
import { RecipeService } from './../../services/recipe.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    console.log('id = ' + this.id);
    if (!this.id) {
      this.id = 1;
    }
    this.getRecipe();
  }

  getRecipe() {
   this.recipe = this.recipeService.getRecipe(this.id);
  }
}
