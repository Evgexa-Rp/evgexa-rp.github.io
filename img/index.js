const fs = require("fs");

let dir = fs.readdirSync("./items");
dir.forEach((e) => {
    if (e.search("people_") != -1){
        console.log(e);
        let newText = ""
        e.split("_").forEach(e => {
            newText+=capitalizeFirstLetter(e)+".";
        });
        fs.renameSync("./items/"+e,"./items/"+newText.slice(0,-1));
        console.log(newText.slice(0,-1));
    }
});
function capitalizeFirstLetter([ first, ...rest ]) {
    return [ first.toUpperCase(), ...rest ].join('');
  }