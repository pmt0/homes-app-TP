import { Component, OnInit } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { HousingService } from './housing.service';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
  <main>
    <header class="brand-name">      
      <a href="/">
      <img class= "brand-logo" src="./assets/vector-home-icon.jpg" alt="logo" aria-hidden="true" >
      </a>
    </header>
    <section class="content">
      <router-outlet class="listing"></router-outlet>
    </section>
  </main>  
  `,
  styleUrls: ['./app.component.css'],
  imports: [HomeComponent, RouterModule]
})
export class AppComponent {
  title = 'homes';
}




// export class SearchComponent implements OnInit{
//   searchValue: string = '';
//   constructor(private housingService: HousingService) { }
//   ngOnInit(): void {
// }
// fetchData() {
//   this.housingService.getAllHousingLocations(this.searchValue).subscribe;
// }
// }