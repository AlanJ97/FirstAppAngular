import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hola a esto';
  rockBands = ['nirvana', 'banda 2', 'banda3', 'banda4'];
  rockBandName = '';
  changeTitle(){
    this.title = 'Nuevo titulo';
  }
  addRockBand(){
    this.rockBands.push(this.rockBandName);
    this.rockBandName = '';
  }
}
