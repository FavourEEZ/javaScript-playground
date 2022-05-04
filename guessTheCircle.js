//TODO Epic Goal: Add a timer... could be a clock or a moving or text increasing.
function resetPage(){
    window.location.reload();    
}

function colourChange(){
    const suffix = this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

function randomiseNumbers(){
    let num1 = Math.floor(Math.random()*9) + 1;//Gives a random number up to 9
    let num2 = Math.floor(Math.random()*9) + 1;
    while (num1 == num2){
        num2 = Math.floor(Math.random()*9) + 1;
        console.log("Random number 1 was the same as random number 2")
    }
    let num3 = Math.floor(Math.random()*9) + 1;
    while (num3 == num1 || num3 == num2){
        
        num3 = Math.floor(Math.random() *9) + 1;
        console.log("Random number 3 was the same as random number or one")

    }
    return [num1, num2, num3]
}

function whenCircleClicked(event){
    console.log(randomNumber1, randomNumber2, randomNumber3);

    if (countCorrect != 3){
        count += 1
        const newDiv = document.createElement("div");
        let divCountText = document.createTextNode(`Tries: ${count}`);
        newDiv.appendChild(divCountText);
        const divWrapper = document.getElementById("wrapper")
        newDiv.style.margin = "auto";
        newDiv.style.width = "25%";
        document.body.insertBefore(newDiv, divWrapper)

        const iconWrapper = document.getElementById("icon-wrapper")
        let iTag = document.createElement('i');
        iTag.classList.add('fa-solid');
    
        setTimeout(() =>{
            newDiv.removeChild(divCountText)}, 1000);
    
        const chosenElement = event.target;
        if (parseInt(chosenElement.id) === randomNumber1 || parseInt(chosenElement.id) === randomNumber2 || parseInt(chosenElement.id) === randomNumber3 ){
            chosenElement.style.borderColor="green";
            countCorrect +=1;
            console.log("Correct!");
            iTag.classList.add('fa-circle-check');
            iconWrapper.appendChild(iTag)
            //TODO Circular icons appear, green tick if correct, red if incorrect
        } else {
            console.log("Incorrect!")
            this.style.visibility = "hidden"
            iTag.classList.add('fa-circle-xmark');
            iconWrapper.appendChild(iTag)

        }    
    }
    if (countCorrect == 3){
        setTimeout( ()=>{
            alert(`Congratulations, you have guessed all 3 circles in ${count} tries! :D`);
        }, 10)
        // As the browser does not have the time to update before the alert fires
        // Using a timeout delays the alert until the next tick when the repain has completed.
        console.log("Game Complete, all circles guessed !");
        
        //TODO: change background colour -- confetti
        const button = document.getElementsByTagName("button");
        gameOver = true

    }
}

//main code
let count = 0;
let countCorrect = 0;

let numbers = randomiseNumbers();
let randomNumber1 = numbers[0];
let randomNumber2 = numbers[1];
let randomNumber3 = numbers[2];

//Removing the original icons that are in the DOM before the program starts
//So that only the icons which we want are shown
const elements = document.getElementsByClassName('fa-solid');
while(elements.length > 0){
    elements[0].parentNode.removeChild(elements[0]);
} //A better ES6 way document.querySelectorAll(".remove").forEach(el => el.remove());

const divWrapper = document.getElementsByClassName("wrapper")[0]

const inputs = document.querySelectorAll('.controls input');
inputs.forEach(input => input.addEventListener("change", colourChange))
inputs.forEach(input => input.addEventListener('mousemove', colourChange));

let circles = document.querySelectorAll('.wrapper div');
circles.forEach(circle => circle.addEventListener("click", whenCircleClicked));

