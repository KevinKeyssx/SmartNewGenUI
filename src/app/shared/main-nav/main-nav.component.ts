import { Component }                        from '@angular/core';
import { BreakpointObserver, Breakpoints }  from '@angular/cdk/layout';
import { Observable }                       from 'rxjs';
import { map, shareReplay }                 from 'rxjs/operators';
import { AppService }                       from 'src/app/service/app.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.styl']
})
export class MainNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private appService: AppService
    ) {}

  public setNavbar() {
    this.appService.setNavbar();
    console.log('Valor navBar open:', this.appService.getNavbar());
  }
}
