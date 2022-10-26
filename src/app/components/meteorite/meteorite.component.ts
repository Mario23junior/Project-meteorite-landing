import { Component, OnInit } from '@angular/core';
import { MeteoriteServiceService } from 'src/app/service/meteorite-service.service';
import { Meteorite } from '../model/Meteorite.model';

@Component({
  selector: 'app-meteorite',
  templateUrl: './meteorite.component.html',
  styleUrls: ['./meteorite.component.css']
})
export class MeteoriteComponent implements OnInit {

  data:Meteorite[] = []

  constructor(
    private service:MeteoriteServiceService
  ) { 
    this.service.listAll()
    .subscribe(data => {
      this.data = data
      console.log(data)
    })
  }


  ngOnInit(): void {
  }

}
