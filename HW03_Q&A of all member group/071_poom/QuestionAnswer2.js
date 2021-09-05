//Object ของแต่ละคำถาม
let question1 = {
    question: "1+1 = ?",
    answer: `1. 2
    2. 3`,//คำตอบที่ให้แสดงเฉยๆ
    correctAnswer: 1 //เอาไว้เช็คตำตอบที่ถูก
}
let question2 = {
    question: "1+2 = ?",
    answer: `1. 2
    2. 3`,
    correctAnswer: 2
}
let question3 = {
    question: "2+1 = ?",
    answer: `1. 2
    2. 3`,
    correctAnswer: 2
}
let question4 = {
    question: "2+2 = ?",
    answer: `1. 4
    2. 3`,
    correctAnswer: 1
}
let question5 = {
    question: "2+3 = ?",
    answer: `1. 4
    2. 5`,
    correctAnswer: 2
}
//สร้างผู้เล่น
let player = {
    name: "poom", 
    questionNumber: '', 
    answerNumber: '',
    score: 0 
}


//เป็นฟังก์ชั่นที่ให้ผู้เล่นใช้ตอบ
function ans(qnum,anum) {
    //เช็คค่าที่ใส่มาว่าตรงกับข้อไหน
    if(qnum==1){
        console.log(question1.question);
        console.log(question1.answer);
        console.log(`your answer choice is: ${anum}`);
        player.questionNumber = '1';
        //เช็คคำตอบ
        if(anum == 1){
            player.answerNumber = '1';
            player.score += 1;
        } else{
            player.answerNumber = '2';
            player.score += 0;
        }
        console.log(player);
    } else if(qnum==2){
        console.log(question2.question);
        console.log(question2.answer);
        console.log(`your answer choice is: ${anum}`);
        player.questionNumber = '2';
        if(anum == 1){
            player.answerNumber = '1';
            player.score += 0;
        } else{
            player.answerNumber = '2';
            player.score += 1;
        }
        console.log(player);
    } else if(qnum==3){
        console.log(question3.question);
        console.log(question3.answer);
        console.log(`your answer choice is: ${anum}`);
        player.questionNumber = '3';
        if(anum == 1){
            player.answerNumber = '1';
            player.score += 0;
        } else{
            player.answerNumber = '2';
            player.score += 1;
        }
        console.log(player);
    } else if(qnum==4){
        console.log(question4.question);
        console.log(question4.answer);
        console.log(`your answer choice is: ${anum}`);
        player.questionNumber = '4';
        if(anum == 1){
            player.answerNumber = '1';
            player.score += 1;
        } else{
            player.answerNumber = '2';
            player.score += 0;
        }
        console.log(player);
    } else if(qnum==5){
        console.log(question5.question);
        console.log(question5.answer);
        console.log(`your answer choice is: ${anum}`);
        player.questionNumber = '5';
        if(anum == 1){
            player.answerNumber = '1';
            player.score += 0;
        } else{
            player.answerNumber = '2';
            player.score += 1;
        }
        console.log(player);
    }
}

ans(1,1);
ans(2,2);
ans(3,1);
ans(4,1);
ans(5,2);

