function kmToCm(km) {
  return km * 100000;
}

function kmToM(km) {
  return km * 1000;
}

function kmToIn(km) {
  return km * 39370.1;
}

function kmToFt(km) {
  return km * 3280.84;
}

function diffInDistance(km1, km2) {
  return km1 - km2;
}

var distance = diffInDistance(200, 100);

console.log(`Distance between 200 km and 100 km is ${distance} km`);
console.log(`Distance between 200 km and 100 km is ${kmToM(distance)} m`);
console.log(`Distance between 200 km and 100 km is ${kmToCm(distance)} cm`);
console.log(`Distance between 200 km and 100 km is ${kmToIn(distance)} in`);
console.log(`Distance between 200 km and 100 km is ${kmToFt(distance)} ft`);
