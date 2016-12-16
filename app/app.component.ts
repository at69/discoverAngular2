import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css']
})
export class AppComponent  {

  private name: string;
  private collection: [any];

  constructor()
  {
    this.name = 'Angular';
    this.collection = [
      {reference: '1234', name: 'Adrien', state: 0},
      {reference: '3456', name: 'Manu', state: 1},
      {reference: '8999', name: 'Ken', state: 2}
    ]
  }

  getDetails(event: Event, parameter)
  {
    let element = event.target || event.currentTarget || event.srcElement;
    console.log(element.attributes.id);
    console.log(element.id);
    console.log(parameter);

    event.preventDefault();
  }
}
