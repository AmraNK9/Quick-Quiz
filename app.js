const answer = Array.from(document.querySelectorAll(".answer"));
const questionDb = document.querySelector("#question");
const questionCounter = document.querySelector("#question-counter");
const scoreDb = document.querySelector("#score");
const progressBar = document.querySelector('#progressBar');

const scorebonus = 10;
let questionCount = 0;
let score = 0;
let questionId;

let Mainquestion = [];
fetch("https://opentdb.com/api.php?amount=10&type=multiple").then(
    (res)=>{
        return res.json();
    }
).then(
    (json)=>{
        Mainquestion = json.results.map(
            (value)=>{
                const formatQuestion = {
                    question:value.question
                }
                answerArray = [...value.incorrect_answers];
             let answerId =Math.floor(Math.random()*4);
                answerArray.splice(answerId,0,value.correct_answer);
                formatQuestion.answer = answerId+1;
                answerArray.forEach(
                    (value,index)=>{
                        formatQuestion[`choice${index+1}`] = value;
                    }
                )
                console.log(formatQuestion)
                return formatQuestion;
            }
        );
 
        question = [...Mainquestion];
        showQuestion();
    }

).catch(
    (err)=>{
        console.log(err)
    }
)
let question = [];
//functionSetup



const showQuestion = ()=>{
 
    if(question.length === 0){
        localStorage.setItem("mostRecentScore",score);
        return window.location.assign("/end.html");
        
    }


  questionId = Math.floor(Math.random()*question.length);

questionCount++;
questionCounter.innerHTML = `${questionCount}/${Mainquestion.length}`
progressBar.style.width = `${questionCount/Mainquestion.length*100}%`
questionDb.innerHTML = question[questionId].question;


answer.forEach(
    (item)=>{
        let forChoice = "choice"+item.dataset["number"];
      
        item.innerHTML = `${question[questionId][forChoice]}`
    }
)


}
    
answer.forEach(
    (answer)=>{
        answer.addEventListener("click",
(e)=>{

    let classValue;
    console.log(e.target.dataset["number"]);
    if(question[questionId].answer==e.target.dataset["number"]){
       console.log("this is true");
       classValue = "correct"
       e.target.parentElement.classList.add(classValue)
       score+= scorebonus;
        scoreDb.innerHTML = score;
      
    }
    else{

        classValue = "incorrect";
        e.target.parentElement.classList.add(classValue);
     
    }
    question.splice(questionId,1);
    setTimeout( 
        ()=>{
            e.target.parentElement.classList.remove(classValue);
            showQuestion();
        }
        ,1000);
}
)
    }
)

