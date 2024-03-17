import { Component, OnInit } from '@angular/core';
import { RecipeServiceService } from '../recipe-service.service';
import { Recipe } from '../recipeModel';
import { Router } from '@angular/router';
import { Category } from '../../category/categoryModel';
import { CategoryService } from '../../category/category.service';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrl: './all-recipes.component.css'
})
export class AllRecipesComponent implements OnInit {
  public filterForm!: FormGroup;
  public recipesList: Recipe[] = []
  sidebarVisible2: boolean = false;
  difficulty!: number;
  public categories: Category[] = [];
  displayFilteredRecipes = false;
  filteredRecipes: Recipe[] = [];

  constructor(private _recipeService: RecipeServiceService, private router: Router,
    private fb: FormBuilder, private _categoryService: CategoryService) { }

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
    this.filterForm = this.fb.group({
      difficulty: [0],
      selectedCategory: this.fb.array([]),
      time: [0]
    });

    this._categoryService.getCategoryList().subscribe({
      next: (res) => {
        this.categories = res;
      },
      error: (err) => {
        console.log(err);
      }
    })

    console.log(this.filterForm.value.selectedCategory)
  }

  showDetails(recipe: Recipe) {
    this.router.navigate(['recipes/recipe-detailes', recipe.id])
  }

  resetForm() {
    this.filterForm.reset(); // Reset all form controls
    const selectedCategoryControl = this.filterForm.get('selectedCategory') as FormArray;
    selectedCategoryControl.clear();
    selectedCategoryControl.controls.forEach((control) => {
      control.setValue(false);
    });
  }

  filter() {
    this.filteredRecipes = this.recipesList.filter(recipe =>
      (this.filterForm.value.difficulty === undefined || recipe.difficulty === this.filterForm.value.difficulty) &&
      (this.filterForm.value.selectedCategory.length == 0 || this.filterForm.value.selectedCategory.includes(recipe.category.name)) &&
      (this.filterForm.value.time === 0 || recipe.preparationTime <= parseInt(this.filterForm.value.time))
    );
    this.displayFilteredRecipes = true;
    this.recipesList = this.filteredRecipes;
  }

  updateSelectedCategories(event: Event, category: string) {
    const formArray = this.filterForm.get('selectedCategory') as FormArray;

    if ((event.target as HTMLInputElement).checked == true) {
      formArray.push(new FormControl(category));
    } else {
      const index = formArray.controls.findIndex(control => control.value === category);
      formArray.removeAt(index);
    }
  }
}