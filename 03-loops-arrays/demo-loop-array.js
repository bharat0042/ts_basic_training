"use strict";
for (let i = 0; i < 5; i++) {
    console.log(i);
}
console.log("\n");
let reviews = [1, 9, 3.5, 55];
let total = 0;
for (let i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
console.log("avrage is  = " + total / reviews.length);
