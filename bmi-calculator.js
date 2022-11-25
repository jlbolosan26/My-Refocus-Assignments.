// weight should be in kilogram
//height should be in meter

function bmi_calculator(weight, height){
    let bmi = (weight/(height**2));
    let bmiRound = bmi.toFixed(2); // to fix result with 2 decimal places.
    console.log(bmi);
    console.log("Your BMI is " + bmiRound);
}

bmi_calculator(50, 1.56);
bmi_calculator("50", 1.56);
bmi_calculator(50, "1.56");
bmi_calculator("50", "1.56");