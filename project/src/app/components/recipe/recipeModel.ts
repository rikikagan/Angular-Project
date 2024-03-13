import { Category } from "../category/categoryModel"
import { User } from "../user/userModel"

export class Recipe {
    id!: number
    name!: string
    category!: Category
    preparationTime!: number
    difficulty!:number
    dateAdded!:Date
    ingredients!: string[]
    preparation!: string[]
    user!:User
    imgUrl!:string
}