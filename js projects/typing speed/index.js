const setOfWords=["Betty bought a bit of butter but the butter was bitter so she bought some bit of butter to make the bit of butter better","She sells sea shells by the sea shore", "How much wood could a woodchuck chuck if a wood chuck could chuck wood?" ];
const message=document.getElementById('msg');
const typearea=document.getElementById('txtarea');
const button1=document.getElementById('buttonstart');
let startTime, endTime;


const playGame=() =>{
    let randomNumber=Math.floor(Math.random()*3);
    message.innerText=setOfWords[randomNumber];
    let date=new Date();
    startTime=date.getTime();
    button1.innerText="Done";
}

const wordCounter=(str)=>{
let response= str.split(" ").length;
return response;
}
const compareWords=(str1,str2)=>{
let words1=str1.split(" ");
let words2=str2.split(" ");
let i=0;

words1.forEach(function(item, index){
    if(item==words2[index]){
        i++;
    }
});
let errorWords=(words1.length- i);
return (i+ " correct out of "+ words1.length+ " words and the total number of errors are "+ errorWords+ ".");
}

const endGame=()=>{
    let date=new Date();
    endTime=date.getTime();
    let totalTime= ((endTime-startTime)/1000);
    let totalWords=typearea.value;
    let wordCount=wordCounter(totalWords);
    let speed= Math.floor((wordCount/totalTime)*60);
    let finalmsg= "you typed "+ speed+ " words per minute ";
    finalmsg += compareWords(msg.innerText,totalWords);
    message.innerText=finalmsg;
}



button1.addEventListener('click', function(){
    if(this.innerText=='Start'){
    typearea.disabled=false;
    playGame();
}else if(this.innerText=='Done'){
    typearea.disabled=true;
    button1.innerText="Start";
    endGame();
}
});