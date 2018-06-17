import { Router } from '@angular/router';
import { Recipe } from './../../recipe.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input()
  public recipe: Recipe;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  navToRecipeDetail(id) {
    console.log('in navTocipeDetail. recipe.id = ' + id);
    // console.log('in navTocipeDetail. recipe.description = ' + recipe.description);
     this.router.navigate(['/recipe-detail', id]);
  }
}
