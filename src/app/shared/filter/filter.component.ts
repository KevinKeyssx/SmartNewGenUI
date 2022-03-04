import { Component, OnInit, ViewChild, ElementRef }     from '@angular/core';
import { MatAccordion }                                 from '@angular/material/expansion';
import {COMMA, ENTER}                                   from '@angular/cdk/keycodes';
import {FormControl}                                    from '@angular/forms';
import {MatAutocompleteSelectedEvent}                   from '@angular/material/autocomplete';
import {MatChipInputEvent}                              from '@angular/material/chips';
import {Observable}                                     from 'rxjs';
import {map, startWith}                                 from 'rxjs/operators';

@Component({
  selector        : 'app-filter',
  templateUrl     : './filter.component.html',
  styleUrls       : ['./filter.component.styl']
})
export class FilterComponent implements OnInit {

  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild(MatAccordion) accordion: MatAccordion;
  //Variables de filtro ships
  public separatorKeysCodes: number[] = [ENTER, COMMA];
  public fruitCtrl                    = new FormControl();
  public filteredFruits               : Observable<string[]>;
  public fruits: string[]             = ['Lemon'];
  public allFruits: string[]          = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
  //Variables de filtro price
  public autoTicks     = false;
  public disabled      = false;
  public invert        = false;
  public max           = 100000;
  public min           = 0;
  public step          = 10000;
  public thumbLabel    = true;
  public value         = 0;
  public vertical      = false;

  constructor() {
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(startWith(null),
      map((fruit: string | null) => 
        (fruit ? this._filter(fruit) : this.allFruits.slice())
      )
    );
  }

  ngOnInit(): void { }

  public add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    // Add our fruit
    if (value) {
      this.fruits.push(value);
    }
    // Clear the input value
    event.input.value = ''
    this.fruitCtrl.setValue(null);
  }

  public remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  public selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    return this.allFruits.filter(
      fruit => fruit.toLowerCase().includes(value.toLowerCase())
    );
  }

}
