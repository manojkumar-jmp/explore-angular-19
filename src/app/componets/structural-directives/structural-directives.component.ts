import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  imports: [CommonModule],
  templateUrl: './structural-directives.component.html',
  styleUrl: './structural-directives.component.css'
})
export class StructuralDirectivesComponent {
  isDiv1Visiable:boolean =true;
  cityList= ["Jamalpur", "Munger", "Bhagalpur","Patna"];
  occupation:string="Select an occupation";
  isLoggedIn:boolean=false;
  onClickShow(){
    this.isDiv1Visiable=true;
  }
  onClickHide(){
    this.isDiv1Visiable=false;
  }
  onOccupationListChanged(value:string):void{
    this.occupation=value;
  }
  onLoginStatustChanged(value:string):void{
    if (value=="LsLoggedIn") {
      this.isLoggedIn=true;      
    } else {
      this.isLoggedIn=false;      
    }
  }
}
