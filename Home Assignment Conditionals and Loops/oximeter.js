function oxygenSaturation(reading){
    if(reading > 95){
        console.log("Your reading is alarming.");
    }
    else if(reading == 95){
        console.log("Your reading is acceptable to continue home monitoring.");
    }
    else if(reading >= 92 && 94 >= reading){
        console.log("You must seek advice from health professionals.");
    }
    else{
        console.log("Seek urgent medical advice.");
    }
}

oxygenSaturation(91)