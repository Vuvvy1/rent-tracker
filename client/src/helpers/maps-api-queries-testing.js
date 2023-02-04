// https://maps.googleapis.com/maps/api/place/findplacefromtext/json
//   ?fields=formatted_address
//   &input=apartment
//   &inputtype=textquery
//   &locationbias=circle%3A2000%49.28%2C-123.2
//   &key=AIzaSyBfkx6vtTumqm093rkUn36xfiNjmWRKeTk

// We can use the following query to pull addresses from the maps API. 
// The "keyword" refers to a search term. So "tower" will get a building with the name tower,
// "apartments" would get results with a building containing the name/term "apartments".
// Radius is in meters. I'm thinking I could run several requests using a small radius and different
// lat/long starting points, to get data for different neighbourhoods. So if I want to generate some 
// west end addresses, I can set lat/long in the middle of the west-end, have a radius of 1000m, and then 
// the api should spit out addresses in the west end. 

  // https://maps.googleapis.com/maps/api/place/nearbysearch/json
  //   ?location=49.28%2C-123.2&radius=50000&keyword=tower&key=AIzaSyBfkx6vtTumqm093rkUn36xfiNjmWRKeTk

const cityHall = { latLong: "49.260120%2C-123.116130", radius: "1000", keyword: "apartments"};
const downtownTowers = { latLong: "49.28395%2C-123.12404", radius: "1700", keyword: "tower"};
const downtown = { latLong: "49.28395%2C-123.12404", radius: "1700", keyword: "apartments" };
const mainScience = { latLong: "49.27156%2C-123.09508", radius: "1000", keyword: "apartments" };
const kitsilano = { latLong: "49.25894%2C-123.16928", radius: "2000", keyword: "apartments" };
const eastVan = { latLong: "49.26267%2C-123.05712", radius: "2000", keyword: "apartments" };
const newBrighton = { latLong: "49.29112%2C-123.04027", radius: "1200", keyword: "apartments" };
const loLo = { latLong: "49.31337%2C-123.07769", radius: "800", keyword: "apartments" };
const upperLonsdale = { latLong: "49.33989%2C-123.07148", radius: "2000", keyword: "apartments" };
const northgate = { latLong: "49.32419%2C-123.11503", radius: "1000", keyword: "apartments" };
const westVan = { latLong: "49.33553%2C-123.16144", radius: "2000", keyword: "apartments" };
const southCambie = { latLong: "49.23823%2C-123.11538", radius: "1100", keyword: "apartments" };
const burnaby = { latLong: "49.24306%2C-122.98148", radius: "2000", keyword: "apartments" };
const newWest = { latLong: "49.21882%2C-122.92029", radius: "2000", keyword: "apartments" };




const generateAddresses = (latLong, radius, keyword) => {
  const apiCall = `https://maps.googleapis.com/maps/api/place/nearbysearch/json
  ?location=${latLong}&radius=${radius}&keyword=${keyword}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`

  return apiCall;

};

// console.log('key'. process.env.REACT_APP_GOOGLE_MAPS_API_KEY)

// git filter-branch --force --index-filter \
// "git rm --cached --ignore-unmatch rent-tracker/client/src/helpers/maps-api-queries-testing.js" \
// --prune-empty --tag-name-filter cat -- --all
// git push --force --verbose --dry-run
// git push --force

// I'm looking into how we can get co-ordinates to place markers on the map from addresses. Google's APIs have a way of doing this, but it's technically not free (it's $5 USD for 1000 api calls, and you get a credit of $200 USD per month, so technically we'd 

console.log("cityHallApts:", generateAddresses(cityHall.latLong, cityHall.radius, cityHall.keyword));
console.log("downtownTowers:", generateAddresses(downtownTowers.latLong, downtownTowers.radius, downtownTowers.keyword));
console.log("downtownApartments:", generateAddresses(downtown.latLong, downtown.radius, downtown.keyword));
console.log("mainScienceApartments:", generateAddresses(mainScience.latLong, mainScience.radius, mainScience.keyword));
console.log("kitsilanoApartments:", generateAddresses(kitsilano.latLong, kitsilano.radius, kitsilano.keyword));
console.log("eastVanApartments:", generateAddresses(eastVan.latLong, eastVan.radius, eastVan.keyword));
console.log("newBrightonApartments:", generateAddresses(newBrighton.latLong, newBrighton.radius, newBrighton.keyword));
console.log("loLoApartments:", generateAddresses(loLo.latLong, loLo.radius, loLo.keyword));
console.log("upperLonsdaleApartments:", generateAddresses(upperLonsdale.latLong, upperLonsdale.radius, upperLonsdale.keyword));
console.log("northgateApartments:", generateAddresses(northgate.latLong, northgate.radius, northgate.keyword));
console.log("westVanApartments:", generateAddresses(westVan.latLong, westVan.radius, westVan.keyword));
console.log("southCambieApartments:", generateAddresses(southCambie.latLong, southCambie.radius, southCambie.keyword));
console.log("burnabyApartments:", generateAddresses(burnaby.latLong, burnaby.radius, burnaby.keyword));
console.log("newWestApartments:", generateAddresses(newWest.latLong, newWest.radius, newWest.keyword));


// To do: south cambie and burnaby