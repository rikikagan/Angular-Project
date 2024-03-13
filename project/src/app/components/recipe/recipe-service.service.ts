import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from './recipeModel';

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {

  public recipeToUpdate!:Recipe
  constructor(private _http: HttpClient) { }

  getRecipesList(): Observable<Recipe[]> {
    return this._http.get<Recipe[]>('https://localhost:7020/api/Recipe')
  }

  getRecipeById(id: number): Observable<Recipe> {
    return this._http.get<Recipe>(`https://localhost:7020/api/Recipe/${id}`)
  }
 
  addRecipe(recipe: Recipe) {
    return this._http.post('https://localhost:7020/api/Recipe', recipe)
    
  }

  updateRecipe(recipe: Recipe)
  {
    return this._http.put('https://localhost:7020/api/Recipe', recipe)
  }
}
