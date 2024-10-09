import {boston} from "./boston.js";

let data = boston.data;
let topearners = [];
for (let i = 0; i < data.length; i++) {
    if (data[i][11] > 200000) {
        topearners.push({ name: data[i][8], salary: data[i][11] });
    }
}
let Earners = `<h1>Top Earner : </h1> 
        <h1>Name :${topearners[0].name}
            <h1> Salary :${topearners[0].salary}</h1>`
document.getElementById("app").innerHTML = Earners;
console.log(topearners)


