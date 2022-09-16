function BmiCalculator() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    var heightInMeter = height * 0.01;
    var bmi = (weight / (heightInMeter * heightInMeter)).toFixed(2);
    if (weight == "") {
        alert("Please enter the weight");
        return false;
    } else if (height == "") {
        alert("Please enter the height");
        return false;
    }
    if (bmi <= 18.5) {
        document.getElementById("percent").innerHTML= bmi;
        document.getElementById("phrase").innerHTML = "Under Weight - Time to grab a bite!";
        document.getElementById("image").innerHTML = '<img src="./img/under-weight.png" alt="BMI" width="110">';
    } else if (bmi > 25) {
        document.getElementById("percent").innerHTML = bmi;
        document.getElementById("phrase").innerHTML = "Fat - Need to workout";
        document.getElementById("image").innerHTML = '<img src="./img/over-weight.png" alt="BMI" width="110">';
    } else {
        document.getElementById("percent").innerHTML = bmi;
        document.getElementById("phrase").innerHTML = "Fit - stay like that";
        document.getElementById("image").innerHTML = '<img src="./img/fit.png" alt="BMI" width="110">';
    }
}

function clearWeight() {
    document.getElementById("weight").value = "";
}

function clearHeight() {
    document.getElementById("height").value = "";
}

function resetBtn() {
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    document.getElementById("percent").innerHTML = "";
    document.getElementById("image").innerHTML = "";
    document.getElementById("phrase").innerHTML = "";
}

