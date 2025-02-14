import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  firstName: string = "Mona";
  lastName: string = "Sona";
  isSpecial:boolean = true;
  isChanged:boolean = true;
  div1Class:string="bg-primary";
  showWelcomeMessage(){
    alert("Welcome to Angular 19");
  }

}
