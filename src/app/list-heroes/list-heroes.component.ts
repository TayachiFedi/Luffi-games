import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-list-heroes',
  templateUrl: './list-heroes.component.html',
  styleUrls: ['./list-heroes.component.css'],
})
export class ListHeroesComponent {
  constructor(public _shared: SharedService) {}

  ngOnInit(): void {
    this._shared.GetAllHeros().subscribe(
      (res) => {
        this._shared.heros = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  delete(id: any) {
    this._shared.deleteHero(id).subscribe(
      (res) => {
        this.ngOnInit();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
