
var randomNum, current, activeUser;
var score0, score1;

//initialization
current=0;
activeUser=0;
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
document.getElementById('score-0').textContent='0';


document.querySelector('.btn-roll').addEventListener('click',function(){
    //rolling dice
    randomNum=Math.floor(Math.random()*6)+1;
    randomNum1=Math.floor(Math.random()*6)+1;
    if(activeUser===0){
    document.querySelector('.dice').src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/243004/dice-'+randomNum+'.png';


    if(randomNum!==1){
        current+=randomNum;
        document.getElementById('current-0').textContent=current; 
    }else{
        if(randomNum ===1){
            current=0;
            document.getElementById('current-0').textContent=current; 
            activeUser=1;


        }
    }
}

    if(activeUser===1){
    document.querySelector('.dice2').src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/243004/dice-'+randomNum1+'.png';
    current+=randomNum1;
    document.getElementById('current-1').textContent=current; 
    if(randomNum1===1){
        current=0;
        document.getElementById('current-1').textContent=current;
    }
    }
});


document.querySelector('.btn-hold').addEventListener('click', function(){
    if(activeUser===0){
        activeUser=1;
       score0=document.querySelector('#current-0').textContent;
        document.querySelector('#score-0').textContent=score0;
    }

    else if(activeUser===1){
        activeUser=0;
       score1=document.querySelector('#current-1').textContent;
        document.querySelector('#score-1').textContent=score1;
    }


});
