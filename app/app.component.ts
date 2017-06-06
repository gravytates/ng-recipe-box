import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Recipes for days</h1>

    <ul>
      <li *ngFor="let recipe of recipes">{{recipe.title}}
        <ul>
        <li>{{recipe.description}}</li>
          <ul>
          <li *ngFor="let ingredients of recipe.ingredients">{{ingredients}}</li>
          </ul>
        </ul>
      </li>
    </ul>
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
}

export class Recipe {
  constructor (public title: string, public description: string, public ingredients: string[]){}
}
