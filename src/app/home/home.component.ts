import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form >
        <input type="text" id="searchInput" placeholder="búsqueda" />
        <button class="search" type="button">Buscar</button> 
        <!-- (click)="displayResults()"  ????? -->
        <div id="results"></div>
        <script src="/src/app/search.ts"></script>
      </form>
    </section>
    <section class="results">
      <app-housing-location *ngFor="let housingLocation of housingLocationList" [housingLocation]="housingLocation"></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
housingService: HousingService = inject(HousingService);

constructor() {
this.housingService.getAllHousingLocations().then((housingLocationList:HousingLocation[])=>{
this.housingLocationList = housingLocationList;
});
 }
}


// intentos de busqueda  vvv

// document.getElementById('searchInput')?.addEventListener('input', function() {
//   let query = (this as HTMLInputElement).value.toLowerCase();
//   let filteredLocations = locations.filter(location => {
//       return location.name.toLowerCase().includes(query) || 
//              location.city.toLowerCase().includes(query) ||
//              location.state.toLowerCase().includes(query);
//   });
//   displayResults(filteredLocations);
// });

// function displayResults(locations) {
//   let resultsDiv = document.getElementById('results');
//   resultsDiv.innerHTML = ''; // Clear previous results
//   if (locations.length === 0) {
//       resultsDiv.innerHTML = '<p>No results found</p>';
//   } else {
//       locations.forEach(location => {
//           let locationDiv = document.createElement('div');
//           locationDiv.innerHTML = `
//               <h2>${location.name}</h2>
//               <p>${location.city}, ${location.state}</p>
//               <img src="${location.photo}" alt="${location.name}" width="100">
//               <p>Available Units: ${location.availableUnits}</p>
//               <p>WiFi: ${location.wifi ? 'Yes' : 'No'}</p>
//               <p>Laundry: ${location.laundry ? 'Yes' : 'No'}</p>
//           `;
//           resultsDiv.appendChild(locationDiv);
//       });
//   }
// }



// otro intento vvv


// // URL  API
// const apiUrl = 'http://localhost:3000/locations'; 

// // Realizar la solicitud a la API al cargar la página
// document.addEventListener('DOMContentLoaded', function() {
//     fetch(apiUrl)
//         .then(response => response.json())
//         .then(data => {
//             const locations = data.citys; 
//             initializeSearch(locations);
//         })
//         .catch(error => console.error('Error fetching locations:', error));
// });

// function initializeSearch(locations?: any[]) {
//     document.getElementById('searchInput')!.addEventListener('input', function() {
//         let query = (this as HTMLInputElement).value.toLowerCase();
//         let filteredLocations = locations?.filter((locations: { name: string; city: string; state: string; }) => {
//             return locations.name.toLowerCase().includes(query) || 
//                    locations.city.toLowerCase().includes(query) ||
//                    locations.state.toLowerCase().includes(query);
//         });
//         displayResults(filteredLocations!);
//     });
// }

// function displayResults(locations: any[]) {
//     let resultsDiv = document.getElementById('results')!;
//     resultsDiv.innerHTML= ''; // Clear previous results
//     if (locations.length === 0) {
//         resultsDiv.innerHTML = '<p>No results found</p>';
//     } else {
//         locations.forEach((locations: { name: any; city: any; state: any; photo: any; availableUnits: any; wifi: any; laundry: any; }) => {
//             let locationDiv = document.createElement('div');
//             locationDiv.innerHTML = `
//                 <h2>${locations.name}</h2>
//                 <p>${locations.city}, ${locations.state}</p>
//                 <img src="${locations.photo}" alt="${locations.name}" width="100">
//                 <p>Available Units: ${locations.availableUnits}</p>
//                 <p>WiFi: ${locations.wifi ? 'Yes' : 'No'}</p>
//                 <p>Laundry: ${locations.laundry ? 'Yes' : 'No'}</p>
//             `;
//             resultsDiv.appendChild(locationDiv);
//         });
//     }
// }