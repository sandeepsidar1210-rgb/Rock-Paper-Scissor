let userScore =0;
let compScore=0;

const msg= document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const showwinner=(userwin , userChoice , CompChoice)=>{
    if (userwin){
        // console.log("YOU WIN !!");
        msg.innerText = `YOU WIN! Your ${userChoice} beats ${CompChoice}`;
        msg.style.backgroundColor ="green";

        userScore++;
        userScorePara.innerText = userScore;

    }
    else
    {
        // console.log("YOU LOSE!!");
         msg.innerText = `YOU LOSE! ${CompChoice} beats yours ${userChoice}`;
        msg.style.backgroundColor ="red";

        compScore++;
        compScorePara.innerText = compScore;

    }       
}

const draw =()=>{
    // console.log("The Game was a Draw !!");
     msg.innerText = "ITS A DRAW!";
    msg.style.backgroundColor ="orange";
}

const genCompChoice = ()=>{
    const options =["rock" , "paper" ,"scissors"];
    const randIdx= Math.floor(Math.random() * 3);
    return options[randIdx];
}

const playgame=(userChoice) => {
    console.log("user choice =", userChoice);
    //generate computer choice -- modular

    const CompChoice = genCompChoice();
    console.log("computer choice =", CompChoice);


    if (userChoice == CompChoice){
        //draw game 
        draw();
    }
    else{
        let userwin = true;
        if(userChoice == "rock"){
            userwin= CompChoice=="paper" ? false : true;
        }
        else if(userChoice == "paper"){
            userwin = CompChoice =="scissors" ? false : true;
        }
        else{
            userwin = CompChoice== "rock"? false : true;
        }
        showwinner(userwin , userChoice , CompChoice);
    }
}



choices.forEach((choice) => {
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id")
        playgame(userChoice);
    } )
    
});