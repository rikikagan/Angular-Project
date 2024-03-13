import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllRecipesComponent } from '../recipe/all-recipes/all-recipes.component';
import { RecipeDetailesComponent } from '../recipe/recipe-detailes/recipe-detailes.component';
import {  recipeGuard } from '../recipe/recipe.guard';
import { AddRecipeComponent } from '../recipe/add-recipe/add-recipe.component';
import { EditRecipeComponent } from '../recipe/edit-recipe/edit-recipe.component';

const recipeRoutes: Routes = [
  { path: '', redirectTo: 'all-recipes', pathMatch: 'full' },
  { path: 'all-recipes', component: AllRecipesComponent },
  { path: 'add-recipes', component: AddRecipeComponent,canActivate: [recipeGuard] },
  { path: 'recipe-detailes/:id', component: RecipeDetailesComponent,canActivate: [recipeGuard]},
  { path: 'edit-recipes', component: EditRecipeComponent,canActivate: [recipeGuard]},

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(recipeRoutes)
  ],
  exports: [RouterModule]
})
export class RecipeRoutesModule { }
