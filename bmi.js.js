var a = document.getElementById("w");
var b = document.getElementById("h");


let weight = a.value;
let height = b.value;




function calculateBMI(){
    // let weightinput = prompt("Enter Your Weight");
    // let heightinput = prompt("Enter Your Height");
    

    // let heightcm = parseFloat(heightinput);
    // let weight = parseFloat(weightinput);

    // let height = heightcm / 100;



    var weightinput = document.getElementById("w").value;
    var heightinput = document.getElementById("h").value;

    let weight = parseFloat(weightinput);
    let heightcm = parseFloat(heightinput);

    let height = heightcm / 100;

    let bmi = weight /(height*height);

    document.getElementById("result").innerHTML=`Your BMI is :  ${bmi.toFixed(2)}`;


    if(bmi <= 18.5 ){
        document.getElementById("result2").innerHTML= "UNDER WEIGHT";

    }

    else if(bmi > 18.5 && bmi <= 24.9){
        document.getElementById("result2").innerHTML= "NORMAL";
    }

    else if(bmi > 25.0 && bmi <=29.9){
        document.getElementById("result2").innerHTML= "OVER WEIGHT";
    }

    else{
        document.getElementById("result2").innerHTML= "OBESE";
    }


    // images

    if(bmi <= 18.5){
         document.getElementById("image").src="images/under.jpeg";
        
    }

    else if(bmi > 18.5 && bmi <= 24.9){
        document.getElementById("image").src="images/normal.jpeg";
        
    }

    else if(bmi > 25.0 && bmi <=29.9){
        document.getElementById("image").src="images/ower.jpeg";
        
    }

    else if(bmi > 30){
        document.getElementById("image").src="images/obse.jpeg";
    }


}





