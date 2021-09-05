let player = {
    name: "Guest",
    questionNumber: '',
    answerNumber: '',
    score: 0
};

const QuestionAns = {
    questionFirst (num){
        if(num == 1){
            player.questionNumber = '1';
            player.answerNumber = '1';
            player.score += 1;
            console.log('correct!!!');
            return player;
        } else if (num == 2){
            player.questionNumber = '1';
            player.answerNumber = '2';
            player.score += 0;
            console.log('incorrect!!!');
            return player;
        } else{
            player.questionNumber = '1';
            player.answerNumber = 'Invalid Answer!!';
            player.score += 0;
            console.log('incorrect!!!');
            return player;
        }
    },
    questionSecond (num2){
        if(num2 == 1){
            player.questionNumber = '2';
            player.answerNumber = '1';
            player.score += 0;
            console.log('incorrect!!!');
            return player;
        } else if (num2 == 2){
            player.questionNumber = '2';
            player.answerNumber = '2';
            player.score += 1;
            console.log('correct!!!');
            return player;
        } else{
            player.questionNumber = '2';
            player.answerNumber = 'Invalid Answer!!';
            player.score += 0;
            console.log('incorrect!!!');
            return player;
        }
    },
    questionThird (num3){
        if(num3 == 1){
            player.questionNumber = '3';
            player.answerNumber = '1';
            player.score += 0;
            console.log('incorrect!!!');
            return player;
        } else if (num3 == 2){
            player.questionNumber = '3';
            player.answerNumber = '2';
            player.score += 1;
            console.log('correct!!!');
            return player;
        } else{
            player.questionNumber = '3';
            player.answerNumber = 'Invalid Answer!!';
            player.score += 0;
            console.log('incorrect!!!');
            return player;
        }
    },
    questionFourth (num4){
        if(num4 == 1){
            player.questionNumber = '4';
            player.answerNumber = '1';
            player.score += 1;
            console.log('correct!!!');
            return player;
        } else if (num4 == 2){
            player.questionNumber = '4';
            player.answerNumber = '2';
            player.score += 0;
            console.log('incorrect!!!');
            return player;
        } else{
            player.questionNumber = '4';
            player.answerNumber = 'Invalid Answer!!';
            player.score += 0;
            console.log('incorrect!!!');
            return player;
        }
    },
    questionFive (num5){
        if(num5 == 1){
            player.questionNumber = '5';
            player.answerNumber = '1';
            player.score += 0;
            console.log('incorrect!!!');
            return player;
        } else if (num5 == 2){
            player.questionNumber = '5';
            player.answerNumber = '2';
            player.score += 1;
            console.log('correct!!!');
            return player;
        } else{
            player.questionNumber = '5';
            player.answerNumber = 'Invalid Answer!!';
            player.score += 0;
            console.log('incorrect!!!');
            return player;
        }
    },
};



const readline = require('readline');
const readInterface = readline.createInterface({
        input: process.stdin,
        output: process.stdout});

readInterface.question("Enter Name: ", name => {
    player.name = name;
    console.log(`Hello ${player.name}`);
readInterface.question(`Question 1 : 1+1 = ?
               1. 2
               2. 3
Enter Answer: `, number => {
    ans = parseInt(number);
    console.log(QuestionAns.questionFirst(ans));
readInterface.question(`Question 2 : 1+2 = ?
               1. 2
               2. 3
Enter Answer: `, number2 => {
    ans2 = parseInt(number2);
    console.log(QuestionAns.questionSecond(ans2));
readInterface.question(`Question 3 : 2+1 = ?
               1. 2
               2. 3
Enter Answer: `, number3 => {
    ans3 = parseInt(number3);
    console.log(QuestionAns.questionThird(ans3));
readInterface.question(`Question 4 : 2+2 = ?
               1. 4
               2. 3
Enter Answer: `, number4 => {
    ans4 = parseInt(number4);
    console.log(QuestionAns.questionFourth(ans4));
readInterface.question(`Question 5 : 2+3 = ?
               1. 4
               2. 5
Enter Answer: `, number5 => {
    ans5 = parseInt(number5);
    console.log(QuestionAns.questionFive(ans5));
    readInterface.close();
                    });
                });
            });
        });
    });
});


