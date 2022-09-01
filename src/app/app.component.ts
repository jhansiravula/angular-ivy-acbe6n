import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  ngOnInit() {
    var searchTerms = ['term1', 'term3', 'term4'];
    var csvRows = [
      { id: 'term1' },
      { id: 'term2' },
      { id: 'term3' },
      { id: 'term4' },
    ];
    var results = csvRows.filter((row) =>
      searchTerms.some((value) => row.id.includes(value))
    );
    console.log('results', results);
    console.log('json:', JSON.stringify(results));
    this.newMethod();
  }

  newMethod() {
    let cocktailListc = [
      {
        ingredients: 'vodka',
      },
      {
        ingredients: 'water',
      },
      {
        ingredients: 'soda',
      },
      {
        ingredients: 'rum',
      },
      {
        ingredients: 'orange',
      },
    ];
    const selectedOptions = ['vodka', 'b', 'c'];

    let check = [];

    selectedOptions.forEach((opt) => {
      cocktailListc.forEach((cocktail) => {
        if (
          cocktail.ingredients.toLowerCase().includes(opt.toLowerCase()) ===
          true
        ) {
          check.push(cocktail);
        }
      });
    });

    if (check.length > 0) {
      console.log(true);
      console.log(check);
    }

    let selectedDrinks = cocktailListc.filter((cocktail, i) => {
      selectedOptions.reduce(
        (has, option) => has && cocktail.ingredients.includes(option),
        true
      );
    });
    console.log('selectedDrinks', selectedDrinks);
  }
}
