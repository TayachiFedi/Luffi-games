import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent {
  hero = {
    name: '',
    power: 0,
    image: ''
  }
  heros: any[] = [];

  ajout() {
    this._sahred.heros.push(this.hero);
    this.hero = {
      name: '',
      power: 0,
      image: ''
    }
  }
  constructor(public _sahred: SharedService) { }
}
