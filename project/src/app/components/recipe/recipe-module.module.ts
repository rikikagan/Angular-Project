import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RecipeRoutesModule } from '../recipe.routes/recipe.routes.module';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { RecipeDetailesComponent } from './recipe-detailes/recipe-detailes.component';
import { SmallRecipeComponent } from './small-recipe/small-recipe.component';
import { LogOutButtonComponent } from '../log-out-button/log-out-button.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { HeaderComponent } from '../../header/header.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { HoursPipe } from '../../hours.pipe';
import { SidebarModule } from 'primeng/sidebar';
import { CheckboxModule } from 'primeng/checkbox';
import { RatingModule } from 'primeng/rating';


@NgModule({
  declarations: [AllRecipesComponent, RecipeDetailesComponent, SmallRecipeComponent, AddRecipeComponent, EditRecipeComponent],
  imports: [
    CommonModule, RecipeRoutesModule, LogOutButtonComponent, FormsModule, HeaderComponent,
    ButtonModule, ReactiveFormsModule, HoursPipe, SidebarModule,CheckboxModule,RatingModule
  ]
})
export class RecipeModuleModule { }
