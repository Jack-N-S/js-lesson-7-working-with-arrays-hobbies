var hobbies = ["coding", "skiing", "baseball", "muay thai", "pizza", "gym"];
//console.log(hobbies.length);

hobbies.push("volleyball");
//console.log(hobbies[2]);

hobbies.pop();
//console.log(hobbies);

hobbies.splice(2, 0, "kickball", "dodgeball");
//console.log(hobbies);

hobbies.shift();
//console.log(hobbies);

hobbies.unshift("TSLs");
//console.log(hobbies);

var goals = ["developer job", "live abroad", "enjoy life"];
var allTheThings = [...hobbies, ...goals];
//console.log(allTheThings);

var enjoyLife = allTheThings.indexOf("enjoy life");
//console.log(enjoyLife);

allTheThings.splice(10, 1);
//console.log(allTheThings);

var plans = allTheThings.map(function(item){
    return `I can't wait to start ${item}.`;
});
console.log(plans);
