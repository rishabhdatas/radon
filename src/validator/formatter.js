const notes = function() {
    let text = "       functionUp        ";
    let result = text.trim();
    console.log(result)

    let lower = "JAVASCRIPT";
    let r1 = lower.toLowerCase();
    console.log(r1)

    let upper = "functionUp";
    let r2 = upper.toUpperCase();
    console.log(r2)
}

module.exports.notes = notes