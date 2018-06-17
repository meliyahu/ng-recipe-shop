import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path: 'recipe-list', component: RecipeListComponent},
  {path: 'recipe-item', component: RecipeItemComponent},
  {path: 'recipe-detail/:id', component: RecipeDetailComponent},
  {path: 'shopping-list', component: ShoppingListComponent},
  {path: 'shopping-list-edit', component: ShoppingEditComponent},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [RecipeListComponent, RecipeItemComponent, RecipeDetailComponent, ShoppingListComponent, ShoppingEditComponent, NotfoundComponent]
