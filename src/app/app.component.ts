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

    console.log(cocktailListc.some(item => selectedOptions.includes(item.ingredients)))
  }
}
