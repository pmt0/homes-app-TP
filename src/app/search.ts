
const apiUrl = 'http://localhost:3000/locations'; 

// Realizar la solicitud a la API al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const locations = data.locations; //  como uso la propiedad 'locations' aca
            initializeSearch(locations);
        })
        .catch(error => console.error('Error fetching locations:', error));
});

function initializeSearch(locations: any[]) {
    document.getElementById('searchInput')!.addEventListener('input', function() {
        let query = (this as HTMLInputElement).value.toLowerCase();
        let filteredLocations = locations.filter((location: { name: string; city: string; state: string; }) => {
            return location.name.toLowerCase().includes(query) || 
                   location.city.toLowerCase().includes(query) ||
                   location.state.toLowerCase().includes(query);
        });
        displayResults(filteredLocations);
    });
}

function displayResults(locations: any[]) {
    let resultsDiv = document.getElementById('results')!;
    resultsDiv.innerHTML= ''; // Clear previous results
    if (locations.length === 0) {
        resultsDiv.innerHTML = '<p>No results found</p>';
    } else {
        locations.forEach((location: { name: any; city: any; state: any; photo: any; availableUnits: any; wifi: any; laundry: any; }) => {
            let locationDiv = document.createElement('div');
            locationDiv.innerHTML = `
                <h2>${location.name}</h2>
                <p>${location.city}, ${location.state}</p>
                <img src="${location.photo}" alt="${location.name}" width="100">
                <p>Available Units: ${location.availableUnits}</p>
                <p>WiFi: ${location.wifi ? 'Yes' : 'No'}</p>
                <p>Laundry: ${location.laundry ? 'Yes' : 'No'}</p>
            `;
            resultsDiv.appendChild(locationDiv);
        });
    }
}