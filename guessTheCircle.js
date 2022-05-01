function resetPage(){
    //TODO: Reset changes made and start again... either find a function that exists or make one to intialise everything
    window.location.reload() 
}

function wrapperListener(event) {
    console.log(randomNumber1, randomNumber2, randomNumber3);
    
    count += 1
    const newDiv = document.createElement("div");
    let divCountText = document.createTextNode(`Tries: ${count}`);
    newDiv.appendChild(divCountText);
    const divWrapper = document.getElementById("wrapper")
    newDiv.style.margin = "auto";
    newDiv.style.width = "25%";
    document.body.insertBefore(newDiv, divWrapper)

    const chosenElement = event.target;
    if (parseInt(chosenElement.id) === randomNumber1 || parseInt(chosenElement.id) === randomNumber2 || parseInt(chosenElement.id) === randomNumber3 ){
        chosenElement.style.borderColor="green";
        countCorrect +=1;
        console.log("Correct!");
        //TODO Circular icons appear, green tick if correct, red if incorrect
    } else {
        console.log("Incorrect!")
    }
    if (countCorrect == 3){
        setTimeout( ()=>{
            alert(`Congratulations, you have guessed all 3 circles in ${count} tries! :D`);
        }, 10)
        // As the browser does not have the time to update before the alert fires
        // Using a timeout delays the alert until the next tick when the repain has completed.
        console.log("Game Complete, all circles guessed !");
        
        //change background colour -- confetti
        //Button appears, to play again - Button resets the game
        const button = document.getElementsByTagName("button");
        gameOver = true

    }
    setTimeout(() =>{
        newDiv.removeChild(divCountText)}, 1000);
}

function colourChange(){
    document.documentElement.style.setProperty(`--${this.name}`, this.value)
    //document.documentElement.style.setProperty()
}

let randomNumber1 = Math.floor(Math.random()*9) + 1;//Gives a random number up to 9
let randomNumber2 = Math.floor(Math.random()*9) + 1;
while (randomNumber1 == randomNumber2){
    randomNumber2 = Math.floor(Math.random()*9) + 1;
    console.log("Random number 1 was the same as random number 2")
}
let randomNumber3 = Math.floor(Math.random()*9) + 1;
while (randomNumber3 == randomNumber1 || randomNumber3 == randomNumber2){
    
    randomNumber3 = Math.floor(Math.random() *9) + 1;
    console.log("Random number 3 was the same as random number or one")

}
let count = 0;
let countCorrect = 0;
let gameOver = false


const divWrapper = document.getElementsByClassName("wrapper")[0]
divWrapper.addEventListener("click", wrapperListener )

const input = document.getElementById('colourChange');
input.addEventListener("change", colourChange)