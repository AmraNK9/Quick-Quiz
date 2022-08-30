const answer = Array.from(document.querySelectorAll(".answer"))
const questionDb = document.querySelector("#question");

const Mainquestion = [
    {
        question:"what is the answer of these question",
        choice1:"choice1",
        choice2:"choice2",
        choice3:"choice3",
        choice4:"choice4",
        answer:"1"
    },
    {
        question:"What is the famous japan actor ",
        choice1:"thu ta",
        choice2:"yo ma ti",
        choice3:"kim mot shi",
        choice4:"Nay Htoo Naing",
        answer:"3",
    },
    {
        question:"What is the 2 japan actor ",
        choice1:"thu ta",
        choice2:"yo ma ti",
        choice3:"kim mot shi",
        choice4:"Nay Htoo Naing",
        answer:"2",
    },
]

//functionSetup
const question = [...Mainquestion];

const showQuestion = ()=>{
    if(question.length === 0){
        return window.location.assign("/end.html")
        
    }
    const  questionId = Math.floor(Math.random()*question.length);
questionDb.innerHTML = question[questionId].question;


answer.forEach(
    (item)=>{
        let forChoice = "choice"+item.dataset["number"];
      
        item.innerHTML = `${question[questionId][forChoice]}`
    }
)
    
for(let i=0;i<answer.length;i++){
answer[i].addEventListener("click",
(e)=>{
    console.log("this is work"+i);
    let classValue;
    console.log(e.target.dataset["number"]);
    if(question[questionId].answer==e.target.dataset["number"]){
       console.log("this is true");
       classValue = "correct"
       e.target.parentElement.classList.add(classValue)
       question.splice(questionId,1);
       setTimeout( 
        ()=>{
            e.target.parentElement.classList.remove(classValue);
            showQuestion();
        }
        ,1000);
      
    }
    else{
        console.log("false");
        classValue = "incorrect";
        e.target.parentElement.classList.add(classValue);
        setTimeout( 
            ()=>{
                e.target.parentElement.classList.remove(classValue);
                showQuestion();
            }
            ,1000);
    }

}
)
}


}

showQuestion();