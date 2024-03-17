import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from '../../category/categoryModel';
import { CategoryService } from '../../category/category.service';
import { User } from '../../user/userModel';
import { Recipe } from '../recipeModel';
import { RecipeServiceService } from '../recipe-service.service';
import { urlValidator } from './urlValidator';
import { MessageService } from 'primeng/api';
import { arrayMinLengthValidator } from './arrayValidator';


@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrl: './add-recipe.component.css'
})
export class AddRecipeComponent implements OnInit {
  public addForm!: FormGroup;
  public categories: Category[] = [];
  
  constructor(private _categoryService: CategoryService,private _recipeService:RecipeServiceService, 
    private fb: FormBuilder,private router: Router,private messageService: MessageService) { }

  ngOnInit(): void {
    this.addForm = this.fb.group({
      recipeName: ['', [Validators.required,Validators.minLength(5)]],
      recipeCategory: ['', Validators.required],
      recipeDifficulty: [0, Validators.required],
      recipeTime: [0, [Validators.required,Validators.pattern(/^(1?[1-9]|[1-9][0-9]|1[0-7][0-9]|180)$/)]],
      recipeImageUrl: ['', [Validators.required,urlValidator]],
      ingredients: this.fb.array([],arrayMinLengthValidator(2)),
      preparation: this.fb.array([],arrayMinLengthValidator(2))
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
    (this.addForm.get('ingredients') as FormArray).push(this.fb.control(''));
  }

  removeIngredient(index: number): void {
    (this.addForm.get('ingredients') as FormArray).removeAt(index);
  }

  get getIngredients(): FormArray {
    return this.addForm.get('ingredients') as FormArray;
  }
  addPreparation(): void {
    (this.addForm.get('preparation') as FormArray).push(this.fb.control(''));
  }

  removePreparation(index: number): void {
    (this.addForm.get('preparation') as FormArray).removeAt(index);
  }

  get getPreparation(): FormArray {
    return this.addForm.get('preparation') as FormArray;
  }
  checkValidation()
  {
    if(this.addForm.invalid)
      this.showTopCenter()
    else
      this.submit()
  }
  showTopCenter() {
    this.messageService.add({ key: 'tc', severity: 'error', summary: 'שגיאה', detail: 'הטופס לא תקין' });
  }
  showSuccess() {
    this.messageService.add({ key: 'tc', severity: 'success', summary: 'תקין', detail: 'המתכון נוסף בהצלחה' });
}
  submit(){
    let category:Category={
      id: 0,
      name: this.addForm.value.recipeCategory,
      iconUrl: ''
    }
    let user: User = {
      userName: sessionStorage.getItem('username')!,
      id: 0,
      address: '',
      email: '',
      password: sessionStorage.getItem('password')!
    };
    let newRecipe:Recipe={
      id: 0,
      name: this.addForm.value.recipeName,
      category: category,
      preparationTime:this.addForm.value.recipeTime ,
      difficulty: parseInt(this.addForm.value.recipeDifficulty),
      dateAdded:new Date(),
      ingredients: this.addForm.value.ingredients.filter((i: string) => i !== ''),
      preparation: this.addForm.value.preparation.filter((p: string) => p !== ''),
      user: user,
      imgUrl: this.addForm.value.recipeImageUrl
    }
    this._recipeService.addRecipe(newRecipe).subscribe({
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
