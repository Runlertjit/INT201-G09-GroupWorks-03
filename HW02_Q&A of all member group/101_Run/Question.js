let quizQ1 = {  // สร้าง Object ที่ชื่อว่า quizQ1
    Quest : 'Question 1 : Where do bats live?', // กำหนด Key ที่ชื่อว่า Quest ซึ่งมี Value ที่เก็บ String ที่ใช้เป็นคำถาม
    preAns : {a : 'A) Cave',b : 'B) Sea',c : 'C) Valcano'}, // กำหนด Key ที่ชื่อว่า preAns ซึ่งมี Value เป็น Object ที่ใช้สำหรับเก็บตัวเลือกของคำถาม
    check (sc){ // สร้าง Key ที่ชื่อว่า check ซึ่งมีค่าเป็น Function มีหน้าที่สำหรับไว้เช็คคำตอบที่ Player ส่งกลับมา
        if(sc == 1){return true // ถ้า Player ส่งเลข 1 มาจะใช้ If else ในการเช็คเงื่อนไข โดยถ้าเลขที่ส่งมามีค่าเท่ากับ 1 จะ return true
        }else{return `${false} The answer is ${this.preAns.a}`;} // แต่ถ้าไม่เท่ากับ 1 จะ return false พร้อมกับส่งคำตอบที่ถูกต้องกลับคืนไป
    }    
};
// quizQ2 ถึง quizQ5 มีหลักการทำงานคล้ายๆ quizQ1 เพียงแค่เปลี่ยนคำถาม ตัวเลือกของคำถาม และเงื่อนไขใน check()  
let quizQ2 = {
    Quest : 'Question 2 : Where do fish live?',
    preAns : {a : 'A) River',b : 'B) Sea',c : 'C) Correct All'},
    check (sc){
        if(sc == 3){return true
        }else{return `${false} The answer is ${this.preAns.c}`;}
    }    
};

let quizQ3  = {
    Quest : 'Question 3 : (1*2)/1 = ? ',
    preAns : {a : 'A) 4',b : 'B) 2',c : 'C) 5'},
    check (sc){
        if(sc == 2){return true
        }else{return `${false} The answer is ${this.preAns.b}`;}
    }    
};

let quizQ4 = {
    Quest : 'Question 4 : How many days are there in a week?',
    preAns : {a : 'A) 7 days',b : 'B) 4 days',c : 'C) 5 days'},
    check (sc){
        if(sc == 1){return true
        }else{return `${false} The answer is ${this.preAns.a}`;}
    }    
};

let quizQ5 = {
    Quest : 'Question 5 : How many provinces are have in Thailand?',
    preAns : {a : 'A) 76',b : 'B) 77',c : 'C) 78'},
    check (sc){
        if(sc == 2){return true
        }else{return `${false} The answer is ${this.preAns.b}`;}
    }    
};


const player1 = { // สร้าง Object สำหรับ Player โดยใช้ const เพื่อที่จะไม่สามารถ redeclare ค่าได้
    pName : 'RunPlayer1', // สร้าง Key ที่ชื่อว่า pName โดยมี value ที่เก็บชื่อของผู้เล่นไว้
    answer : {answerQ1 : `${quizQ1.preAns.a} : ${quizQ1.check(1)}`,
              answerQ2 : `${quizQ3.preAns.a} : ${quizQ3.check(1)}`,
              answerQ3 : `${quizQ5.preAns.c} : ${quizQ5.check(3)}`},
              // สร้าง Key ที่ชื่อ answer เพื่อใช้สำหรับเก็บคำตอบและแสดงคำตอบของแต่ละคำถามที่ผู้เล่นตอบ โดยมี value เป็น Object 
              // โดยแต่ละ Key ใน Object ของ answer จะไปเรียกใช้ Object ของแต่ละคำถาม ตัวอย่างเช่น
              // answerQ1 : `${quizQ1.preAns.a} : ${quizQ1.check(1)}` 
              // answerQ1 จะไปเรียก Object quizQ1.preAns.a เพื่อนำมาแสดงค่า และเรียกใช้ check() ที่เป็น Key Function ของ quizQ1
    score : function (){ // สร้าง Key ที่ชื่อ score โดยมีค่าเป็น Function มีหน้าที่ในการเช็คเพื่อเพิ่มคะแนน
        let count = 0; // สร้างตัวแปรที่ชื่อว่า count เพื่อนำมาเก็บค่า
            if(quizQ1.check(1) == true){count +=1} // สร้างเงื่อนไขโดยการเรียกใช้ check() ที่อยู่ใน Object ของ quizQ1 โดยกำหนดว่าถ้า quizQ1.check(1) มีค่าเท่ากับ true จะเพิ่มค่า count++
            if(quizQ3.check(1) == true){count +=1} // สร้างเงื่อนไขโดยการเรียกใช้ check() ที่อยู่ใน Object ของ quizQ3 โดยกำหนดว่าถ้า quizQ3.check(1) มีค่าเท่ากับ true จะเพิ่มค่า count++
            if(quizQ5.check(3) == true){count +=1} // สร้างเงื่อนไขโดยการเรียกใช้ check() ที่อยู่ใน Object ของ quizQ5 โดยกำหนดว่าถ้า quizQ5.check(3) มีค่าเท่ากับ true จะเพิ่มค่า count++
        return count; // return count ที่ใช้สำหรับเก็บค่าออกมา
    }
} 
// player2 และ player3 มีหลักการทำงานคล้ายกับ player1 เพียงแค่เปลี่ยนคำถามของแต่ละ player และเงื่อนไขในการให้คะแนน
const player2 = {
    pName : 'RunPlayer2',
    answer : {answerQ1 : `${quizQ2.preAns.a} : ${quizQ2.check(1)}`,
              answerQ2 : `${quizQ4.preAns.b} : ${quizQ4.check(2)}`,
              answerQ3 : `${quizQ5.preAns.b} : ${quizQ5.check(2)}`},
    score : function (){
        let count = 0;
        if(quizQ2.check(1) == true){count +=1}
        if(quizQ4.check(2) == true){count +=1}
        if(quizQ5.check(2) == true){count +=1}
        return count;
    }
}

const player3 = {
    pName : 'RunPlayer3',
    answer : {answerQ1 : `${quizQ1.preAns.a} : ${quizQ1.check(1)}`,
              answerQ2 : `${quizQ2.preAns.c} : ${quizQ2.check(3)}`,
              answerQ3 : `${quizQ4.preAns.a} : ${quizQ4.check(1)}`},
    score : function (){
        let count = 0;
        if(quizQ1.check(1) == true){count +=1}
        if(quizQ2.check(3) == true){count +=1}
        if(quizQ4.check(1) == true){count +=1}
        return count;
    }
}


console.log(`-----PlayerOne-----`) // แสดงข้อความที่ใช้สำหรับบอกลำดับ player
console.log(`Player Name : ${player1.pName}  
${quizQ1.Quest}
${quizQ1.preAns.a}  ${quizQ1.preAns.b}  ${quizQ1.preAns.c}
Player Answer : ${player1.answer.answerQ1}

${quizQ3.Quest}
${quizQ3.preAns.a}  ${quizQ3.preAns.b}  ${quizQ3.preAns.c}
Player Answer : ${player1.answer.answerQ2}

${quizQ5.Quest}
${quizQ5.preAns.a}  ${quizQ5.preAns.b}  ${quizQ5.preAns.c}
Player Answer : ${player1.answer.answerQ3}
-----------------------
Score : ${player1.score()}`)
// แสดงชื่อผู้เล่น โจทย์คำถาม ตัวเลือกของคำถาม ข้อที่ถูก และ Score โดยเรียกใช้จาก Object ของ player และ quizQ 

console.log('------------------------------------')
console.log(`-------PlayerTwo-------`)
console.log(`Player Name : ${player2.pName}
${quizQ2.Quest}
${quizQ2.preAns.a}  ${quizQ2.preAns.b}  ${quizQ2.preAns.c}
Player Answer : ${player2.answer.answerQ1}

${quizQ4.Quest}
${quizQ4.preAns.a}  ${quizQ4.preAns.b}  ${quizQ4.preAns.c}
Player Answer : ${player2.answer.answerQ2}

${quizQ5.Quest}
${quizQ5.preAns.a}  ${quizQ5.preAns.b}  ${quizQ5.preAns.c}
Player Answer : ${player2.answer.answerQ3}
-----------------------
Score : ${player2.score()}`)
// แสดงชื่อผู้เล่น โจทย์คำถาม ตัวเลือกของคำถาม ข้อที่ถูก และ Score โดยเรียกใช้จาก Object ของ player และ quizQ 

console.log('------------------------------------')
console.log(`-------PlayerThree-------`)
console.log(`Player Name : ${player3.pName}
${quizQ1.Quest}
${quizQ1.preAns.a}  ${quizQ1.preAns.b}  ${quizQ1.preAns.c}
Player Answer : ${player3.answer.answerQ1}

${quizQ2.Quest}
${quizQ2.preAns.a}  ${quizQ2.preAns.b}  ${quizQ2.preAns.c}
Player Answer : ${player3.answer.answerQ2}

${quizQ3.Quest}
${quizQ3.preAns.a}  ${quizQ3.preAns.b}  ${quizQ3.preAns.c}
Player Answer : ${player2.answer.answerQ3}
-----------------------
Score : ${player3.score()}`)
// แสดงชื่อผู้เล่น โจทย์คำถาม ตัวเลือกของคำถาม ข้อที่ถูก และ Score โดยเรียกใช้จาก Object ของ player และ quizQ 





   
