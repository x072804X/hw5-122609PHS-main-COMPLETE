
/**
 * Gets the amount if it exists, otherwise returns null
 * @returns {number || null} the amount as a number, or null if empty
 */
function getAmount() {
const amount = document.getElementById('amount').value;
if (amount == ''){
    return null;
} else {
    return parseFloat(amount);
}
}
/**
 * Gets the from unit if it is specified, otherwise returns null
 * @returns {string || null} the unit as a string, or null if unspecified
 */
function getFromUnit() {
const fromUnit = document.getElementById('op-unit-from').value; 
  if (fromUnit == '') {
    return null; 
} else if (fromUnit == "Please specifiy a unit") { 
return null;
} else {
    return fromUnit;

}
}
/**
 * Gets the to unit if it is specified, otherwise returns null
 * @returns {string || null} the unit as a string, or null if unspecified
 */
function getToUnit() {
const toUnit = document.getElementById("op-unit-to").value;
  if (toUnit == '' || toUnit == "Please specify a unit") {
return null; 
   } else {
return toUnit; 
   }

}

    //const amount = document.getElementById('amount').value;
   // const fromUnit = document.getElementById('op-unit-from').value;
   // const toUnit = document.getElementById("op-unit-to").value;
/**
 * This function is called whenever the user presses the "Convert!" button.
 * It should alert the user if any of the fields are null or if the amount is negative.
 * Otherwise, it should call getResult and alert the user of the result.
 * e.g. "2 Pint is equal to 4 Cup"
 */    // TODO: Call your 3 data grabbing functions, check if they have values,
    //       pass them to getResult, and alert the user of the conversion!
function convert() {
    const inp = document.getElementById('amount').value;

    const amount = getAmount()
    const fromUnit = getFromUnit()
    const toUnit = getToUnit()
    let answer = getResult(amount, fromUnit, toUnit)
 if ( amount == null || fromUnit == null || toUnit == null) {
    alert("Need to fill out all fields")
    return; 
} else if (amount <= 0) {
    alert("There is a negative number, cannot convert!");
    return;
} else {
    console.log(answer)
    //return answer;
    alert(amount + " " + fromUnit + " is equal to " + answer + " " + toUnit)


}   
}

/**
 * This function should take the amount, fromUnit, and toUnit, and
 * return the result of the conversion. You should use the
 * getUnitInFlOz function in your calculation.
 * 
 * e.g. arguments of 2, "Pint", "Cup" should return 4
 * 
 * @param {number} amount The amount to convert
 * @param {string} fromUnit The unit we are coming from
 * @param {string} toUnit The unit we are going to
 * @returns {number} the resulting amount, in toUnit units
 */
// - There are 8 fl oz in a cup
 //- There are 2 cups in a pint
 //- There are 2 pints in a quart
// - There are 4 quarts in a gallon.
function getResult(amount, fromUnit, toUnit) {
    const newamount = getUnitInFlOz(amount)
    const newfromUnit = getUnitInFlOz(fromUnit)
    const newtoUnit = getUnitInFlOz(toUnit)
    //console.log(newamount, newfromUnit, newtoUnit)
    const fluidoz = newamount * newfromUnit
    const result = fluidoz / newtoUnit
    return result; 
}

/**
 * Gets the number of fl oz in the given unit
 * @param {string} unit the unit, e.g. "Fl Oz", "Cup", etc.
 * @returns {number || null} the number of fl oz or null if invalid unit
 */
function getUnitInFlOz(unit) {
    if (unit === 'Fl Oz') {
        return 1;
    } else if (unit === 'Cup') {
        return 8;
    } else if (unit === 'Pint') {
        return 16;
    } else if (unit === 'Quart') {
        return 32;
    } else if (unit === 'Gallon') {
        return 128;
    } else {
        return unit || null;
    }
}


