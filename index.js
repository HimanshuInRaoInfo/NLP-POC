const readLine = require('readline');
const { extractProductName, addUniqueData } = require('./process.js');
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('WHAT IS DATA\n', (name) => {

    let process = extractProductName(name);

    if (!process) {
        // console.log('Could not extract product name from the input data.');
        let dataUnique = addUniqueData(name);
        console.log("unique ::: ", dataUnique);
    }
    console.log(`The product name is: ${process}`);

    rl.close();
});

// Run the file