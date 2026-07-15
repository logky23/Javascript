const fs = require("fs");
const inputFile = 'sample1.txt';
const outputFile = 'output.txt';

fs.readFile(inputFile, "utf-8", ((err, data) => {
    if (err) {
        console.log(err);
        return;
    };
    
    fs.writeFile(outputFile, data, "utf-8", (err) => {
        if (err) {
            console.log(err)
            return;
        };
        console.log("written successfully");
    })
    
}))