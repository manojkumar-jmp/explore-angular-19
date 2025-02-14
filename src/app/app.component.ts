import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './componets/first/first.component';
import { DataBindingComponent } from './componets/data-binding/data-binding.component';

@Component({
  selector: 'app-root',
  imports: [FirstComponent, 
            DataBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'explore-angular-19';
}
