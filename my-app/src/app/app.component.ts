import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';

  countNumber = 0;
  resetBtn(){
    this.countNumber=0;
  }

  CountBtn(){
    this.countNumber = this.countNumber +1;
  }

  DecreaseBtn(){
    this.countNumber= this.countNumber -1;
    if(this.countNumber<0){
      this.countNumber=0;
    }
  }
}
