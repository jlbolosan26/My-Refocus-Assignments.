const bmiResult = require("./bmi-calculator");

test("Check if BMI Calculator will result to 20.55 with weight of 50kg and 1.56m height", () =>{
    expect(bmiResult.bmiFunc(50, 1.56)).toEqual(20.55);
});

test("Check if BMI Calculator will result to 20.55 with weight of 50kg and 1.56m height", () =>{
    expect(bmiResult.bmiFunc("50", 1.56)).toEqual(20.55);
});

test("Check if BMI Calculator will result to 20.55 with weight of 50kg and 1.56m height", () =>{
    expect(bmiResult.bmiFunc("50", "1.56")).toEqual(20.55);
});