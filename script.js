let btn = document.getElementById('btn');
 let output = document.getElementById('outputtext');
 
 let number =[Math.floor(Math.random() * 100)]

 btn.addEventListener('click',function(){
    let input =parseInt(document.getElementById('userInput').value);
    if(input == number){
        output.innerHTML=`you guessed right,your number was ${number}`
    }else if (input > number){
        output.innerHTML="Please guess a lesser number "
    };
    if(input < number){
        output.innerHTML="Please guess a higher number"
    }
 })