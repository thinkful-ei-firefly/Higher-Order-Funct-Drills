"use strict";
const turtles = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

const result = turtles.filter(negative => negative[0] >= 0 && negative[1] >= 0);
console.log(result);


const totalMovements = result.map(negative => negative[0] + negative[1]);
console.log(totalMovements);

totalMovements.forEach((negative, i) => console.log(`Movement # ${i + 1}: ${negative} steps`));

//console.log(JSON.stringify(result));