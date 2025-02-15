import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './componets/first/first.component';
import { DataBindingComponent } from './componets/data-binding/data-binding.component';
import { StructuralDirectivesComponent } from './componets/structural-directives/structural-directives.component';
import { AttributeDirectivesComponent } from './componets/attribute-directives/attribute-directives.component';

@Component({
  selector: 'app-root',
  imports: [FirstComponent, 
            // DataBindingComponent,
           //  StructuralDirectivesComponent,
            AttributeDirectivesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'explore-angular-19';
}
