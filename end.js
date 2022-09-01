const ScoreDb = document.querySelector("#score");
const saveBtn = document.querySelector("#save");


const score = localStorage.getItem("mostRecentScore") || "0";
ScoreDb.innerHTML = score;
const HightScore = JSON.parse(localStorage.getItem("heightScore")) || [];

saveBtn.addEventListener("click",
()=>{
    HightScore.push(score);
    HightScore.sort((a,b)=>b-a);
    HightScore.splice(5);
    localStorage.setItem("heightScore",JSON.stringify(HightScore))
    console.log(HightScore);
    window.location.assign("/hightScore.html")
}
)

