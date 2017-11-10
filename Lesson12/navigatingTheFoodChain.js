var eatsPlants = false;
var eatsAnimals = true;

var category = (eatsAnimals && eatsPlants) ? 'omnivore' : undefined || eatsPlants ? 'herbivore' : undefined || eatsAnimals ? 'carnivore' : undefined ;


console.log(category);
