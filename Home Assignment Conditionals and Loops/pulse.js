function pulseOximeter(reading){
    if (reading >= 40 && 100 >= reading){
        console.log("Your reading is normal.");
    }
    else if(reading >= 101 && 109 >= reading){
        console.log("Acceptable to continue home monitorting.");
    }
    else if(reading >= 110 && 130 >= reading){
        console.log("Seek advice from health professionals.");
    }
    else if(reading >= 131){
        console.log("Seek urgent medical advice.");
    }
}

pulseOximeter(142)