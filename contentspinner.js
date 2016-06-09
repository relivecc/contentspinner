"use strict";
function spin_internal(input, inside) {
    var parts = [];
    var openingPos = input.indexOf("{");
    var endPos = input.indexOf("}");
    if (openingPos == -1 && endPos == -1) {
        if (inside) {
            var options = input.split('|');
            return options[Math.floor(Math.random() * options.length)];
        }
        else {
            return input;
        }
    }
    else {
        if (openingPos == -1 || endPos == -1) {
            throw new Error("uneven brackets");
        }
        else if (endPos < openingPos) {
            throw new Error("end bracket before opening bracket");
        }
        else {
            openingPos = input.lastIndexOf("{", endPos);
            parts.push(input.substring(0, openingPos));
            parts.push(spin_internal(input.substring(openingPos + 1, endPos), true));
            parts.push(input.substring(endPos + 1));
            return spin_internal(parts.join(''), false);
        }
    }
}
function spincontent(text) {
    return spin_internal(text, false);
    return "test";
}
exports.spincontent = spincontent;
//# sourceMappingURL=contentspinner.js.map