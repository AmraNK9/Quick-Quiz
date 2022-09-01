const hightScoreDb = document.querySelector("#hightScore");

const score = JSON.parse(localStorage.getItem("heightScore"));

hightScoreDb.innerHTML = score.map(
    (value)=>{
        return `<li>${value}</li>`
    }
)
.join(" ")