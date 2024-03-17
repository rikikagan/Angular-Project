import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from '../../category/category.service';
import { RecipeServiceService } from '../recipe-service.service';
import { Category } from '../../category/categoryModel';
import { Recipe } from '../recipeModel';
import { arrayMinLengthValidator } from '../add-recipe/arrayValidator';
import { urlValidator } from '../add-recipe/urlValidator';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrl: './edit-recipe.component.css'
})
export class EditRecipeComponent implements OnInit{
  public updateForm!: FormGroup;
  public categories: Category[] = [];
  
  constructor(private _categoryService: CategoryService,private _recipeService:RecipeServiceService, 
    private fb: FormBuilder,private router: Router,private messageService: MessageService) { }
    
  ngOnInit(): void {
    this.updateForm = this.fb.group({
      recipeName: [this._recipeService.recipeToUpdate.name, [Validators.required,Validators.minLength(5)]],
      recipeCategory: [this._recipeService.recipeToUpdate.category.name, Validators.required],
      recipeDifficulty: [this._recipeService.recipeToUpdate.difficulty, Validators.required],
      recipeTime: [this._recipeService.recipeToUpdate.preparationTime,[Validators.required,Validators.pattern(/^(1?[1-9]|[1-9][0-9]|1[0-7][0-9]|180)$/)]],
      recipeImageUrl: [this._recipeService.recipeToUpdate.imgUrl,[Validators.required,urlValidator]],
      ingredients: this.fb.array(this._recipeService.recipeToUpdate.ingredients,arrayMinLengthValidator(2)),
      preparation: this.fb.array(this._recipeService.recipeToUpdate.preparation,arrayMinLengthValidator(2))
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

  checkValidation()
  {
    if(this.updateForm.invalid)
      this.showError()
    else
      this.update()
  }
  showError() {
        this.messageService.add({ key: 'tc', severity: 'error', summary: 'שגיאה', detail: 'הטופס לא תקין' });
  }
  showSuccess() {
        this.messageService.add({ severity: 'success', summary: 'תקין', detail: 'המתכון עודכן בהצלחה' });
}
  update()
  {
    let newCategory:Category={
      id: 0,
      name: this.updateForm.value.recipeCategory,
      iconUrl: ''
    }
    let newRecipe:Recipe={
      id: this._recipeService.recipeToUpdate.id,
      name: this.updateForm.value.recipeName,
      category:newCategory,      
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
        this.showSuccess()
        this.router.navigate(['/recipes/all-recipes'])
      },
      error: (err) => {
         console.log(err);
      }
      
    })
  }
}
