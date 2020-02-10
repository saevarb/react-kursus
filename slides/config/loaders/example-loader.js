const prettier = require("prettier");

module.exports = function(args) {
    const exampleLines = [];
    let foundStart = false;
    let foundEnd = false;
    console.log("Example loader");
    console.log(this.request);
    for(const line of args.split("\n")) {
        console.log(line);
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
    const resultSource = exampleLines.join("\n");
    const formatted = prettier.format(resultSource, {
        printWidth: 50,
        trailingComma: "all",
        tabWidth: 2,
        jsxBracketSameLine: false,
        arrowParens: "always"
    });
    return formatted;
}
