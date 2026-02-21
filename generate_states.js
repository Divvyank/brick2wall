const fs = require('fs');
const topojson = require('topojson-client');
const d3 = require('d3-geo');

async function generateStates() {
    try {
        const res = await fetch('https://code.highcharts.com/mapdata/countries/in/custom/in-all-disputed.topo.json');
        const topology = await res.json();

        const objectKey = Object.keys(topology.objects)[0];
        const statesFeatureCollection = topojson.feature(topology, topology.objects[objectKey]);

        // Create projection for India
        const projectionIndia = d3.geoMercator().fitSize([500, 550], statesFeatureCollection);
        const pathGenerator = d3.geoPath().projection(projectionIndia);

        const statesData = statesFeatureCollection.features.map(feature => {
            return {
                id: feature.id || feature.properties.hc_key || feature.properties.name,
                name: feature.properties.name || "Unknown",
                path: pathGenerator(feature)
            };
        });

        const cities = [
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

        const pins = cities.map(city => {
            const [x, y] = projectionIndia(city.coords);
            return {
                name: city.name,
                x: (x / 500) * 100,
                y: (y / 550) * 100
            };
        });

        fs.writeFileSync('./src/data/india-states.json', JSON.stringify({ states: statesData, pins: pins }, null, 2));
        console.log('States generated successfully.');
    } catch (e) {
        console.error('Error generating map:', e);
    }
}

generateStates();
