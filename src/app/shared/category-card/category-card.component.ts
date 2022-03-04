import { Component, OnInit } from '@angular/core';
import { COMMA, ENTER }         from '@angular/cdk/keycodes';
import { MatChipInputEvent}     from '@angular/material/chips';

export interface Fruit {
  name: string;
}
@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.styl']
})
export class CategoryCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  fruits: Fruit[] = [{name: 'Lemon'}, {name: 'Lime'}, {name: 'Apple'}];

  add(event: MatChipInputEvent): void {
    let value = (event.value || '').trim();
    // Add our fruit
    if (value) {
      this.fruits.push({name: value});
    }
    event.input.value = ''
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

}
