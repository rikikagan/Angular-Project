import { Component, OnInit } from '@angular/core';
import { RecipeServiceService } from '../recipe-service.service';
import { Recipe } from '../recipeModel';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrl: './all-recipes.component.css'
})
export class AllRecipesComponent implements OnInit{
  
  public recipesList: Recipe[] = []

  constructor(private _recipeService: RecipeServiceService,private router: Router) { }

  ngOnInit(): void {
    this._recipeService.getRecipesList().subscribe({
      next: (res) => {
        this.recipesList = res
        console.log(this.recipesList)
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  showDetails(recipe: Recipe) {
    this.router.navigate(['recipes/recipe-detailes', recipe.id])
  }
}
