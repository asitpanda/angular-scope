import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h1>Hello from {{name}}!</h1>
    From Test:  <input type="text" [(ngModel)]="test.name">
<br>
From Text1: {{test1.name}}
<br>
  `,
})
export class App {
  name = 'Angular';

  test:any = {
		name: 'one'
	};

	// test1:any = {
	// 	name: this.test.name,
	// 	age: 21
	// };

  test1 = this.test;
}

bootstrapApplication(App);
