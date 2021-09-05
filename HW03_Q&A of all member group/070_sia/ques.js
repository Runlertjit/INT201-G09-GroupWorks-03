 let player = {
        name: "Sia",
        score: 0
    }
const firstQuestion = {
    question: "what is the answer of 4+5?",
    true: "9",
    false: "2"
}
const secondQuestion = {
    question: "what is the answer of 3+4?",
    true: "7",
    false: "6"
}
const thirtQuestion = {
    question: "what is the answer of 4-5?",
    true: "-1",
    false: "2"
}
const forthQuestion = {
    question: "What is the answer of 2+2?",
    true: "4",
    false: "3"
}
const fifthQuestion = {
    question: "What is the answer of 2+9?",
    true: "11",
    false: "13"
}


//function questingAndAnswer() {
let arr = [firstQuestion, secondQuestion, thirtQuestion, forthQuestion, fifthQuestion];
let arr2 = ["9", "6", "2", "4", "11"];

for (let i = 0; i < arr.length; i++) {
    console.log(`Questing: ${arr[i].question}`);
    checkAnswer(arr[i], arr2[i])
    player[`questingAndAnswer${i+1}`] = {
            question: arr[i].question,
            answer: arr2[i]
        }
        
       
}
console.log("Player :")
console.log(player)
    //}

function checkAnswer(q, a) {
    if (a == q.true) {
        console.log(`Your answer: ${a} is Correct!`)
        player.score = player.score + 1;
        console.log(`Total score: ${player.score}`)
        console.log("")
    } else {
        console.log(`Your answer: ${a} is Wrong.`)
        console.log(`Total score: ${player.score}`)
        console.log("")
    }
}