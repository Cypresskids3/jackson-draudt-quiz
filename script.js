let score = 0;
let points = 10
let questions = document.body.childNodes;; //list of questions
let questioniterator = 1;

function correct(button){
    score+=points; //adds ten to score
    button.style.backgroundColor = 'green';
    let parent = button.parentNode; //  gets parent of button (div)
    let siblings = parent.childNodes; //list of all the buttons
    siblings.forEach(element => {
        element.disabled = true; // disables other answers
    });
    questioniterator+=2; //disables other answers
    questions[questioniterator].scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest"
    });
}

function incorrect(button){
    score-=points; //takes away ten from score
    button.style.backgroundColor = 'red';
    let parent = button.parentNode; //  gets parent of button (div)
    let siblings = parent.childNodes; //list of all the buttons
    siblings.forEach(element => {
        element.disabled = true; // disables other answers
    });
    questioniterator+=2; //disables other answers
    questions[questioniterator].scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest"
    });
}

function calculateScore(button){
    button.innerHTML = "Score" + score;
    if(score == -100){
        let rickLink = document.createElement("a");
        rickLink.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        rickLink.innerHTML = "your prize =)"
        rickLink.target = "_blank"; //open to your prize
        button.appendChild(rickLink)
    }
}

// function reset(){
//     score = 0;
//     questionIterator = 1;
//     questioniterator.forEach(question => {
//         let answerList = question[2].childNodes;
//         answerList.forEach(answer => {
//             answer.disabled = false;
//             answer.style.backgroundColor = 'aliceblue';
//         });
//     });
//     question[questionIterator].scrollIntoView({
//         behavior: "smooth",
//         block: "end",
//         inline: "nearest",
//     })
// }