const myBMI = {
    bmiFunc : function (weight, height){
    let bmi = (weight/(height**2));
    let bmiRound = bmi.toFixed(2); // to fix result with 2 decimal places.
    return (+bmiRound);
}}



module.exports = myBMI;