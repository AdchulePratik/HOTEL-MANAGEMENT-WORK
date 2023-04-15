import { Component } from '@angular/core';
import { DataService } from "src/app/data.service";


@Component({
  selector: 'app-adminland',
  templateUrl: './adminland.component.html',
  styleUrls: ['./adminland.component.scss']
})
export class AdminlandComponent {

  image = 'assets/img/Entrada-hotel front.jpg';


  constructor(private dataservice:DataService,){}

  hotelRequest(){
    console.log('HOTEL REQUEST',this.hotelRequest);




  }


}
