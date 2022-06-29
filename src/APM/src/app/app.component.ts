import { Component } from '@angular/core';

@Component({
  selector:'pm-root',
  template:`
    <div>
      <h1>{{title}}</h1>
      <div>
        My first AppComponent
      </div>
    </div>
  `
})

export class AppComponent {
  title = "Create App Component";
}
