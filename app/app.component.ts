import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Recipes for days</h1>

    <ul>
      <li  *ngFor="let recipe of recipes" >{{recipe.title}}
      <button (click)="viewChicken(recipe)">details</button>
      </li>
    </ul>

    <div *ngIf="selectedChicken">
      <ul>
      <li>{{selectedChicken.description}}</li>
        <ul>
        <li *ngFor="let ingredients of selectedChicken.ingredients">{{ingredients}}</li>
        </ul>
      </ul>
      <hr>
      <label>Recipe Name:</label>
      <input [(ngModel)]="selectedChicken.title">
      <label>Enter Recipe Description:</label>
      <input [(ngModel)]="selectedChicken.description">
      <label>Add An Ingredient:</label>
      <button (click)="hideChicken()">Update</button>

      <br>
      <br>
      <input [(ngModel)]="newIngredient">
      <button (click)="addIngred()">Add ingredient</button>
      <button (click)="delIngred(selectedChicken)">Delete all Ingredients</button>
    </div>
  `
})

export class AppComponent {
  recipes =[
    new Recipe('Fried Chicken', 'delicious succulent tasty', ['chicken', 'oil', 'flour', 'egg', 'seasoning']),
    new Recipe('Fried Chicken', 'delicious succulent tasty', ['chicken', 'oil', 'flour', 'egg', 'seasoning']),
    new Recipe('Fried Chicken', 'delicious succulent tasty', ['chicken', 'oil', 'flour', 'egg', 'seasoning']),
    new Recipe('Fried Chicken', 'delicious succulent tasty', ['chicken', 'oil', 'flour', 'egg', 'seasoning']),
    new Recipe('Fried Chicken', 'delicious succulent tasty', ['chicken', 'oil', 'flour', 'egg', 'seasoning']),
    new Recipe('Fried Chicken', 'delicious succulent tasty', ['chicken', 'oil', 'flour', 'egg', 'seasoning']),
    new Recipe('Fried Chicken', 'delicious succulent tasty', ['chicken', 'oil', 'flour', 'egg', 'seasoning']),
    new Recipe('Fried Chicken', 'delicious succulent tasty', ['chicken', 'oil', 'flour', 'egg', 'seasoning']),
    new Recipe('Fried Chicken', 'delicious succulent tasty', ['chicken', 'oil', 'flour', 'egg', 'seasoning']),
    new Recipe('Fried Chicken', 'delicious succulent tasty', ['chicken', 'oil', 'flour', 'egg', 'seasoning'])
  ];

  selectedChicken = null;
  newIngredient = null;
  viewChicken(chosenOne) {
    this.newIngredient = null;
    this.selectedChicken = chosenOne;
  }

  addIngred() {
    if(this.newIngredient != null) {
      this.selectedChicken.ingredients.push(this.newIngredient);
    }
  }

  delIngred(secrets) {
    secrets.ingredients = [];
  }

  hideChicken() {
    this.selectedChicken = null;
  }
}

export class Recipe {
  constructor (public title: string, public description: string, public ingredients: string[]){}
}
