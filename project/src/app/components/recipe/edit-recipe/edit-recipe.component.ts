import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from '../../category/category.service';
import { RecipeServiceService } from '../recipe-service.service';
import { Category } from '../../category/categoryModel';
import { Recipe } from '../recipeModel';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrl: './edit-recipe.component.css'
})
export class EditRecipeComponent implements OnInit{
  public updateForm!: FormGroup;
  public categories: Category[] = [];
  
  constructor(private _categoryService: CategoryService,private _recipeService:RecipeServiceService, 
    private fb: FormBuilder,private router: Router) { }
    
  ngOnInit(): void {
    this.updateForm = this.fb.group({
      recipeName:[this._recipeService.recipeToUpdate.name, Validators.required],
      recipeCategory:[this._recipeService.recipeToUpdate.category.name, Validators.required],
      recipeDifficulty:[this._recipeService.recipeToUpdate.difficulty, Validators.required],
      recipeTime: [this._recipeService.recipeToUpdate.preparationTime, Validators.required],
      recipeImageUrl:[this._recipeService.recipeToUpdate.imgUrl, Validators.required],
      ingredients: this.fb.array(this._recipeService.recipeToUpdate.ingredients),
      preparation: this.fb.array(this._recipeService.recipeToUpdate.preparation)
    });

    this._categoryService.getCategoryList().subscribe({
      next: (res) => {
        this.categories = res;
      },
      error: (err) => {
        console.log(err);
      }
    })  

  }

  addIngredient(): void {
    (this.updateForm.get('ingredients') as FormArray).push(this.fb.control(''));
  }

  removeIngredient(index: number): void {
    (this.updateForm.get('ingredients') as FormArray).removeAt(index);
  }

  get getIngredients(): FormArray {
    return this.updateForm.get('ingredients') as FormArray;
  }
  addPreparation(): void {
    (this.updateForm.get('preparation') as FormArray).push(this.fb.control(''));
  }

  removePreparation(index: number): void {
    (this.updateForm.get('preparation') as FormArray).removeAt(index);
   
  }

  get getPreparation(): FormArray {
    return this.updateForm.get('preparation') as FormArray;
  }

  update()
  {
    let category:Category={
      id: this._recipeService.recipeToUpdate.category.id,
      name: this.updateForm.value.recipeCategory,
      iconUrl: ''
    }
    let newRecipe:Recipe={
      id: this._recipeService.recipeToUpdate.id,
      name: this.updateForm.value.recipeName,
      category:category,
      preparationTime:this.updateForm.value.recipeTime,
      difficulty: parseInt(this.updateForm.value.recipeDifficulty),
      dateAdded: this._recipeService.recipeToUpdate.dateAdded,
      ingredients: this.updateForm.value.ingredients,
      preparation: this.updateForm.value.preparation,
      user: this._recipeService.recipeToUpdate.user,
      imgUrl: this.updateForm.value.recipeImageUrl
    }
    this._recipeService.updateRecipe(newRecipe,newRecipe.id).subscribe({
      next: (res) => {
        alert("המתכון עודכן בהצלחה!")
        this.router.navigate(['/recipes/all-recipes'])
      },
      error: (err) => {
         console.log(err);
      }
    })
  }
 
}