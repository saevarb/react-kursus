module.exports = function(args) {
    const exampleLines = [];
    let foundStart = false;
    let foundEnd = false;
    for(const line of args.split("\n")) {
        if(line.indexOf("EXAMPLE START") !== -1) {
            foundStart = true;
            continue;
        }

        if(line.indexOf("EXAMPLE END") !== -1) {
            foundEnd = true;
            continue;
        }

        if(foundStart && !foundEnd) {
            exampleLines.push(line);
        }
        if(foundStart && foundEnd) {
            break;
        }
    }
    if(!foundStart || !foundEnd) {
        throw new Error("Did not find start and/or end of example");
    }
    return exampleLines.join("\n");
}
