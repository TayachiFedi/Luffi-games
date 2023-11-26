import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
hero:any
id:any

  constructor( private activeRoute: ActivatedRoute, private _shared:SharedService, private router: Router   ) { }

  ngOnInit(): void {
   this.id = this.activeRoute.snapshot.paramMap.get("id")
   
    this._shared.getHerobyId(this.id).subscribe(
      res=>{
        this.hero = res
      },
      err=>{
        console.log(err);
      }
    )
  }
  update(){
    this._shared.updateHero(this.id, this.hero).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/list'])
      },
      err=>{
        console.log(err);
      }
    )
  }
}
