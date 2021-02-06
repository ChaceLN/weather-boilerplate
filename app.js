// API Key: eb4c283346de041874998c5c18268a09 (weather-stack)
// API Token: pk.eyJ1IjoiY2hhY2VsbiIsImEiOiJja2psajMyYnMwb2s1MnNzMjUzZGF6NHF2In0.csVBHHgVbvdf5nOoTtDxlw (map-box) 
// >
// http://api.weatherstack.com/current?access_key=eb4c283346de041874998c5c18268a09&query=37.8267,-122.4233
// https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiY2hhY2VsbiIsImEiOiJja2psajMyYnMwb2s1MnNzMjUzZGF6NHF2In0.csVBHHgVbvdf5nOoTtDxlw&limit=1

const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast')


geocode(process.argv[2], (error, { latitude, longitude, location } = {}) => {
	if (error) {
		return console.log(error);
	}
	
	forecast(latitude, longitude, (error, forecastData) => {
		if (error) {
			return console.log(error);
		}
		
		console.log(location);
		console.log(forecastData);
	});
});	