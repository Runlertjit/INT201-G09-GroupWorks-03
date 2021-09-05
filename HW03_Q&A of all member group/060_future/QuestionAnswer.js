//ประกาศ Object Player ไว้ เพื่อเป็นโครงสร้าง Object สำหรับแต่ละผู้เล่น
const player = new Object({name:"player", score:0});
//ประกาศ Array ที่เก็บ Object คำถามในแต่ละข้อไว้ พร้อมกับเฉลย
const question = [
{
    topic:"จังหวัดไหนไม่ได้อยู่ในภาคเหนือ",
    choice:{
        1:"1.เชียงราย",
        2:"2.เชียงใหม่",
        3:"3.พะเยา",
        4:"4.สตูล"
    },
    answer:4
},
{
    topic:"จังหวัดไหนไม่ได้อยู่ในภาคใต้",
    choice:{
        1:"1.ชลบุรี",
        2:"2.ยะลา",
        3:"3.ปัตตานี",
        4:"4.สตูล"
    },
    answer:1
},
{
    topic:"จังหวัดไหนไม่ได้อยู่ในภาคตะวันออก",
    choice:{
        1:"1.ชลบุรี",
        2:"2.ฉะเชิงเทรา",
        3:"3.เพชรบุรี",
        4:"4.ปราจีนบุรี"
    },
    answer:3
},
{
    topic:"จังหวัดไหนไม่ได้อยู่ในภาคกลาง",
    choice:{
        1:"1.กรุงเทพ",
        2:"2.นครปฐม",
        3:"3.นนทบุรี",
        4:"4.กาญจนบุรี"
    },
    answer:4
},
{
    topic:"จังหวัดไหนไม่ได้อยู่ในภาคตะวันออกเฉียงเหนือ",
    choice:{
        1:"1.นครราชสีมา",
        2:"2.นครศรีธรรมราช",
        3:"3.ชัยภูมิ",
        4:"4.อุบลราชธานี"
    },
    answer:1
},]

// เป็นฟังก์ชั่นสำหรับเช็คคำตอบ โดยจะรับ Object ของ play และคำตอบมาเช็ค
const answerCheck = (playerObjectPlay , ans1 , ans2 , ans3 , ans4 , ans5) => {
    // สร้างตัวแปรมาเก็บเป็น Array เพื่อที่จะเอาไปใช้ในการเทียบคำตอบ
    answerSet = new Array();
    // คำสั่ง push จะเป็นการนำค่าไปใส่ไว้ใน Array
    answerSet.push(ans1,ans2,ans3,ans4,ans5)
    // สร้าง Array มาเก็บคำถามที่ผู้เล่นตอบเรามา
    let selectQuestion = new Array();
    // คำสั่งนี้จะเป็นการเช็คว่าใน Array นั้น ผู้ใช้ตอบคำถามข้อไหนกับเรา และหากตอบนอกเหนือจาก 1,2,3,4 จะไม่นับว่าผู้ใช้ตอบ
    for(let j in answerSet){
        if(answerSet[j] == 1 || answerSet[j] == 2 || answerSet[j] == 3 || answerSet[j] == 4){
        //สาเหตุที่ selectQuestion จะต้อง +1 ก่อนใส่ค่าเพราะว่าค่าเดิมของ j จะเป็น index แต่เราต้องการให้เก็บข้อมูลข้อดังนั้นเราจะต้อง +1 ก่อน
         selectQuestion.push(Number(j) + 1)
        }
    }
    //ส่วนนี้จะเป็นการนำชุดคำตอบและชุดคำถามที่ผู้ใช้ตอบ มาเก็บไว้ใน Object ของ playerObjectPlay
    playerObjectPlay.answerSet = answerSet
    playerObjectPlay.selectQuestion = selectQuestion
    // ในส่วนของ loop for นี้จะเป็นการนำ index ของคำตอบที่เก็บเป็นชุด มาเทียบกับคำตอบที่ถูกต้อง
    for(let i in question){
        //หากคำตอบถูกต้องก็จะทำการบวกคะแนน
        if(question[i].answer == answerSet[i]){
            playerObjectPlay.score ++
        }
    }
    //ส่วนนี้จะไปเรียนใช้ฟังก์ชั่นมาแสดงผล
    showSummary(playerObjectPlay)
}

// ใช้สำหรับการรับคำตอบของผู้เล่นได้กรอกมา โดยจะมีชื่อ และคำตอบในแต่ละข้อ
const playerPlay = (name , ans1 , ans2 , ans3 , ans4,ans5) => {
    // จะสร้างตัวแปรโดยยึดโครงสร้างจาก player มาเก็บไว้เป็นตัวแปรใน playerObjectPlay
    let playerObjectPlay = new Object(player)
    // ในที่นี้จะบอกว่าเป็นการเก็บค่าต่างๆไว้ใน Object ที่เราพึ่งทำการสร้างไป โดยเอา name มาอัพเดตค่า name
    playerObjectPlay.name = name;
    playerObjectPlay.score = 0;
    // โดยส่วนนี้เราจะไปใช้ฟังก์ชั่นเพื่อตรวจคำตอบของเรา โดยเราจะส่ง Object แล้วก็คำตอบของเราไปเพื่อไปตรวจคำตอบ
    answerCheck(playerObjectPlay , ans1 , ans2 , ans3 , ans4 ,ans5);
}

//เป็นฟังชั่นที่ไว้แสดงผลลัพธ์
const showSummary = (playerObjectPlay) => {
    console.log(playerObjectPlay)
}

//เป็น Test Case ต่างๆ
playerPlay("Thiraphat" , 4 , 1 ,3, 4 , 1);
playerPlay("John" , 3, 4 ,3, 4 , 2);
playerPlay("Mark" , 2 , 4 ,3, 4 , 3);
playerPlay("Ed" , 2 , 4 ,3, null , 3);
playerPlay("Natty" , 0 , 0 ,3, 4 , 3);
playerPlay("Rose");