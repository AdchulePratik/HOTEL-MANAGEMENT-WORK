import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { DataService } from "../data.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  image = 'assets/img/Entrada-hotel front.jpg';

  constructor(private dataservice: DataService,
    private router: Router) { }

  ngOnInit(): void {
  }
  Journey(data:any){
    console.log('...jy');
    this.dataservice.userJourney = data;
    if(data=='Admin'){
      this.router.navigateByUrl('/admin/adminland')
    }
     if (data=='Owner'){
      this.router.navigateByUrl('/owner/ownerland')
    }
    if(data =='User') {
      this.router.navigateByUrl('/user/userland')
    }
  }


  }


