import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Frying pan pizza', 
            'Pizza with aubergine, ricotta & mint', 
            'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/09/frying-pan-pizza.jpg?itok=ELbVlLN7',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe(
            'One-pan spaghetti', 
            'spaghetti with nduja, fennel & olives', 
            'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/09/one-pan-spaghetti-with-nduja-fennel-olives.jpg?itok=RCfk40Cf',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ])
    ];

    constructor(private slService: ShoppingListService) { }

    getRecipes() {
        // It will return a new array which is an exact copy of which is an exact copy of the one 
        // in this service file, because we don't want to return the exact array because if we change 
        // something in this array, we'll change the array in the service 
        return this.recipes.slice(); 
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}