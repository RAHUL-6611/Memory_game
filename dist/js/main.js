const time = document.getElementById("time");
// console.log(time);

const box = document.querySelector(".box");
const boxes = document.querySelectorAll(".boxes");

var isFlipped = false;
var first;
var second;
var score = 0;

// boxes.forEach((card) => card.addEventListener("click", flip));
boxes.forEach((card) => card.addEventListener("click", flip));


function flip(){
    this.classList.add("flip");

    if (!isFlipped){
        isFlipped = true;
        first = this;
    }
    else
    {
        second = this;
        console.log(first);
        console.log(second);
        checkCard();
    }
}

function checkCard(){

    if (first.dataset.students === second.dataset.students){
        console.log('success');
        score +=1;
        updateScore();
        success();
        
    }
    else
    {
        console.log('a');
        failure();        
    }
}

function success(){
    first.removeEventListener("click", flip);
    second.removeEventListener("click", flip);
    resets();
}

function failure(){
    setTimeout(()=>
        {
            first.classList.remove("flip");
            second.classList.remove("flip");
            resets();
        },500);
}

(function shuffle() {

    boxes.forEach((cards) =>{
        cards.style.order = Math.floor(Math.random()*18);
    }) 

})();

// 
var totaltime = 10;
var startingminute = 0;
var timeCount  = 0;

setInterval(timer,1000);

function timer(){
    const min = Math.floor(timeCount/60);
    // console.log(min?);
    
    let sec = timeCount % 60;
    sec = sec < 10 ? '0' + sec : sec;
    // console.log(sec);
    if (min < 3){
        time.innerHTML = `${min} : ${sec}`;
    }
    else
    {
        console.log(min);
        time.innerHTML = "Times up !!";
        const scoreBoard = document.querySelector(".score>h3>code");
        // console.log(scoreBoard);
        scoreBoard.style.fontSize = "15px";
        scoreBoard.innerHTML = `You Scored : ${score}
                                Game over!`;
    
    }

    timeCount+=1;
    
}
// var totalMinute = 10;
// var StartingMinute = 0;
// var time = StartingMinute * 60;

// // const head = document.querySelector(".h");
// const head = document.getElementById("head");
// setInterval(updatetime, 1000);
// console.log(time);

// function updatetime(){
    
//     const minute = Math.floor(time/60);
//     let sec = time % 60;


//     head.innerHTML = `${minute} : ${sec}`;
//     time++;
    
// }





// 

function resets(){
    isFlipped = false;
    first = null;
    second = null;
}
    
function updateScore(){
        const scoreBoard = document.querySelector(".score>h3>code");
        console.log(scoreBoard);
        scoreBoard.innerHTML = `Score : ${score}`;
    
         
    };
    