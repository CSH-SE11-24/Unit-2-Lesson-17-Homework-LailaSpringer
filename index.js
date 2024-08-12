const prompt = require('prompt-sync')()
// Create an object that represents your favorite restaurant with the keys name (string), cuisine (string), and rating (number)
let restaurantInfo = { restaurantName:"Outback", cuisine:"Steak and Potato",  rating: 4}
// Console log the restaurant's name using the object
console.log(restaurantInfo.restaurantName);


// Add a new key called location and add the restaurant's location
restaurantInfo.location = "2348 Bell Blvd"
//test
console.log(restaurantInfo.location)

// Change the rating of the restaurant to increase it by one
restaurantInfo.rating++


// Add a new key called test and set the value to null
restaurantInfo.test = null
console.log(restaurantInfo)
// Delete the test key
delete restaurantInfo.test;
console.log(restaurantInfo)

// Console log the object to see if the test key is gone
console.log(restaurantInfo)



// Loop through the object and print every key and element.
// It should look like: 
// name is Ugly Baby
// cuisine is thai
// rating is 10
// location is 407 Smith St, Brooklyn
for(let key in restaurantInfo){
console.log(restaurantInfo)
}


