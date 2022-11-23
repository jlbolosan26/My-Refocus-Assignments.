function convertToKelvin(tempFarenheit){
    kelvinF = (tempFarenheit - 32) * 5 / 9 + 273.15;
    console.log(kelvinF);
}

convertToKelvin(10)