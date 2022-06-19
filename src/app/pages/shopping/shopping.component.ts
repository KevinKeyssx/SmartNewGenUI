import { Component, OnInit } from '@angular/core';
import 'animate.css';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector      : 'app-shopping',
  templateUrl   : './shopping.component.html',
  styleUrls     : ['./shopping.component.styl']
})
export class ShoppingComponent implements OnInit {

  constructor(
    public appService: AppService
  ) { }

  ngOnInit(): void {
  }

}
