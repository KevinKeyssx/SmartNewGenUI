import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector      : 'app-home',
  templateUrl   : './home.component.html',
  styleUrls     : ['./home.component.styl']
})
export class HomeComponent implements OnInit {

  constructor(
    public appService: AppService
  ) { }

  ngOnInit(): void {
  }

}
