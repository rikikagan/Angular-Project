import { Component, Input, OnInit } from '@angular/core';
import { RecipeServiceService } from '../recipe-service.service';
import { Recipe } from '../recipeModel';

@Component({
  selector: 'app-small-recipe',
  templateUrl: './small-recipe.component.html',
  styleUrl: './small-recipe.component.css'
})
export class SmallRecipeComponent {
  @Input()
  public recipeToShow!: Recipe;

  constructor( private _recipeService: RecipeServiceService) {
    
  }


}
