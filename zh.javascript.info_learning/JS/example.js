/*
 * @Author: JAM-SEVEN
 * @Date: 2021-05-26 14:41:27
 * @LastEditTime: 2021-05-26 15:49:43
 * @Description: TO DO
 */

var animals = [
    { name: "Fluffykins", species: "rabbit" },
    { name: "Caro", species: "dog" },
    { name: "Hamilton", species: "dog" },
    { name: "Harold", species: "fish" },
    { name: "Ursula", species: "cat" },
    { name: "Jimmy", species: "fish" }
    
]

var isDog = function (x) { return x.species === "dog" }

var dog = animals.filter(isDog)
// console.log(dog);

// var names = animals.map(function (x) { return x.name })
var names = animals.map((x) => x.name)

/*
var names = []
for (var i = 0; i < animals.length; i++) {
    names.push(animals[i].name)
}
*/

// console.log(names);

var orders = [
    { amount: 111 },
    { amount: 222 },
    { amount: 333 },
    { amount: 444 },
    { amount: 555 }    
]

var totalAmount = orders.reduce((sum, order) => sum + order.amount, 0)

console.log(totalAmount);