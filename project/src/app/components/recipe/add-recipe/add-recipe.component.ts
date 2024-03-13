import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Category } from '../../category/categoryModel';
import { CategoryService } from '../../category/category.service';
import { User } from '../../user/userModel';
import { Recipe } from '../recipeModel';
import { RecipeServiceService } from '../recipe-service.service';


@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrl: './add-recipe.component.css'
})
export class AddRecipeComponent implements OnInit {
  public addForm!: FormGroup;
  public categories: Category[] = [];
  
  constructor(private _categoryService: CategoryService,private _recipeService:RecipeServiceService, 
    private fb: FormBuilder,private router: Router) { }

  ngOnInit(): void {
    this.addForm = this.fb.group({
      recipeName: ['', Validators.required],
      recipeCategory: ['', Validators.required],
      recipeDifficulty: [0, Validators.required],
      recipeTime: [0, Validators.required],
      recipeImageUrl: ['', Validators.required],
      ingredients: this.fb.array([]),
      preparation: this.fb.array([])
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

  submit(){
    let name=this.addForm.value.recipeName
    let category:Category={
      id: 0,
      name: this.addForm.value.recipeCategory,
      iconUrl: ''
    }
    let preparationTime=this.addForm.value.recipeTime
    let difficulty=parseInt(this.addForm.value.recipeDifficulty)
    let user: User = {
      userName: sessionStorage.getItem('username')!,
      id: 0,
      address: '',
      email: '',
      password: sessionStorage.getItem('password')!
    };
    let imgUrl=this.addForm.value.recipeImageUrl
    let ingredients=this.addForm.value.ingredients
    let preparation=this.addForm.value.preparation
    let date=new Date();
    let newRecipe:Recipe={
      id: 0,
      name: name,
      category: category,
      preparationTime:preparationTime ,
      difficulty: difficulty,
      dateAdded:new Date(2024, 0, 12, 0, 0, 0),
      ingredients: ingredients,
      preparation: preparation,
      user: user,
      imgUrl: imgUrl
    }
    this._recipeService.addRecipe(newRecipe).subscribe({
      next: (res) => {
        alert("תודה שהוספת לאתר שלנו מתכון!")
        this.router.navigate(['/recipes/all-recipes'])
      },
      error: (err) => {
         console.log(err);
      }
    })

  }
}




