const fs = require('fs');
const topojson = require('topojson-client');
const d3 = require('d3-geo');

const world = JSON.parse(fs.readFileSync('world.json', 'utf8'));
const countries = topojson.feature(world, world.objects.countries);

// India is id "356"
const india = countries.features.find(d => d.id === '356');

// Create projection for India
// [500, 600] preserves a good vertical portrait aspect ratio for India
const projectionIndia = d3.geoMercator().fitSize([500, 550], india);
const pathIndia = d3.geoPath().projection(projectionIndia);
const indiaD = pathIndia(india);

// Calculate pins for India
const indianCities = [
    { name: "Delhi", coords: [77.2090, 28.6139] },
    { name: "Mumbai", coords: [72.8777, 19.0760] },
    { name: "Bangalore", coords: [77.5946, 12.9716] },
    { name: "Kolkata", coords: [88.3639, 22.5726] },
    { name: "Chennai", coords: [80.2707, 13.0827] },
    { name: "Ahmedabad", coords: [72.5714, 23.0225] },
    { name: "Hyderabad", coords: [78.4867, 17.3850] },
    { name: "Pune", coords: [73.8567, 18.5204] },
    { name: "Lucknow", coords: [80.9462, 26.8467] },
    { name: "Jaipur", coords: [75.7873, 26.9124] },
];

const indiaPins = indianCities.map(city => {
    const [x, y] = projectionIndia(city.coords);
    return {
        name: city.name,
        x: (x / 500) * 100, // percentage string for Top/Left so it's responsive
        y: (y / 550) * 100
    };
});

// Create projection for World
// [1000, 500] standard equirectangular
const projectionWorld = d3.geoEquirectangular().fitSize([1000, 500], countries);
const pathWorld = d3.geoPath().projection(projectionWorld);
const worldD = pathWorld(countries);

// Calculate pins for World
const worldCities = [
    { name: "Singapore HQ", hq: true, coords: [103.8198, 1.3521] },
    { name: "Australia", coords: [133.7751, -25.2744] },
    { name: "Vietnam", coords: [108.2772, 14.0583] },
    { name: "Taiwan", coords: [120.9605, 23.6978] },
    { name: "UK", coords: [-3.4360, 55.3781] },
    { name: "Dominican Republic", coords: [-70.1627, 18.7357] },
    { name: "Chile", coords: [-71.5430, -35.6751] }
];

const worldPins = worldCities.map(city => {
    const [x, y] = projectionWorld(city.coords);
    return {
        name: city.name,
        hq: city.hq || false,
        x: (x / 1000) * 100,
        y: (y / 500) * 100
    };
});

// Output
fs.writeFileSync('map_data.json', JSON.stringify({
    india: { path: indiaD, pins: indiaPins },
    world: { path: worldD, pins: worldPins }
}, null, 2));

console.log('Successfully generated topological definitions and coordinate mappings.');
